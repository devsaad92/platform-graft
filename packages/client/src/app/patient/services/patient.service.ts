import { Member } from './../../shared/models/Member';
import { Traitement } from './../../shared/models/Traitement';
import { Hematologie } from './../../shared/models/hematologie';
import { Upload } from './../../shared/models/upload';
import { Bilan } from './../../shared/models/Bilan';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';

import { Instruction } from '../../shared/models/Instruction';
import { Clinique } from './../../shared/models/Clinique';
import { Information } from './../../shared/models/Information';
import { Patient } from './../../shared/models/Patient';
import {
  ALL_PATIENTS_QUERY,
  AllPatientQueryResponse,
  CREATE_BILAN_MUTATION,
  UPDATE_BILAN_MUTATION,
  CREATE_CLINIQUE_MUTATION,
  CREATE_INSTRUCTION_MUTATION,
  CREATE_MUTATION_INFORMATION,
  CREATE_PATIENT_MUTATION,
  MSGINSTRUCTION_QUERY,
  newMedcinMessageSubscription,
  MSG_CLINIQUE_QUERY,
  newMedcinMessageCliniqueSubscription,
  PATIENT_QUERY,
  PatientQueryResponse,
  UPDATE_PATIENT_MUTATION,
  FILE_UPLOADED_MUTATION,
  CREATE_HEMATOLOGIE_MUTATION,
  UPDATE_HEMATOLOGIE_MUTATION,
  CREATE_MUTATION_TRAITEMENT,
  CREATE_MUTATION_addMedcinPatient
} from './../graphql';

@Injectable()
export class PatientService {
  messagesQuery: QueryRef<any>;
  messagesCliniqueQuery: QueryRef<any>;

  constructor(private apollo: Apollo) { }

  getAll() {
    return this.apollo.watchQuery<AllPatientQueryResponse>({
      query: ALL_PATIENTS_QUERY,
    }).valueChanges.map(response => response.data);
  }

  getOne(id) {
    return  this.apollo.watchQuery<PatientQueryResponse>({
      query: PATIENT_QUERY,
      variables: {
        id
      }
    }).valueChanges.map(response => response.data);
  }

  // Chat Instructions
  getInstructions(id) {
    this.messagesQuery = this.apollo.watchQuery<any>({
      query: MSGINSTRUCTION_QUERY,
      variables: {
        patientId: id
      }
    });

    return this.messagesQuery.valueChanges.map(response => response.data);
  }

  subscribeToNewMessages() {
    this.messagesQuery.subscribeToMore({
      document: newMedcinMessageSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        return {
          ...prev,
          instructions: [...prev['instructions'], subscriptionData.data.newMessageInstruction],
        };
      }
    });
  }

  // chat cliniques

  getCliniques(id) {
    this.messagesCliniqueQuery = this.apollo.watchQuery<any>({
      query: MSG_CLINIQUE_QUERY,
      variables: {
        patientId: id
      }
    });

    return this.messagesCliniqueQuery.valueChanges.map(res => res.data);
  }

  subscribeToNewMessagesCliniques() {
    this.messagesCliniqueQuery.subscribeToMore({
      document: newMedcinMessageCliniqueSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        return {
          ...prev,
          cliniques: [...prev['cliniques'], subscriptionData.data.newMessageClinique],
        };
      }
    });
  }

  createPatient(patient: Patient) {
    return this.apollo.mutate({
      mutation: CREATE_PATIENT_MUTATION,
      variables: {
        firstName: patient.firstName,
        lastName: patient.lastName,
        dateDeNaissance: patient.dateDeNaissance,
        sexe: patient.sexe,
        dateDeGreffe: patient.dateDeGreffe
      },
      refetchQueries: [{ query: ALL_PATIENTS_QUERY }]
    }).map(response => response.data);
  }

  updatePatient(patient: Patient) {
    return this.apollo.mutate({
      mutation: UPDATE_PATIENT_MUTATION,
      variables: {
        id: patient.id,
        firstName: patient.firstName,
        lastName: patient.lastName,
        dateDeNaissance: patient.dateDeNaissance,
        sexe: patient.sexe,
        dateDeGreffe: patient.dateDeGreffe
      },
      refetchQueries: [{ query: ALL_PATIENTS_QUERY }]
    }).map(response => response.data);
  }

  createClinique(clinique: Clinique) {
    return this.apollo.mutate({
      mutation: CREATE_CLINIQUE_MUTATION,
      variables: {
        patientId: clinique.patientId,
        text: clinique.text,
        date: clinique.date,
      }
    }).map(response => response.data);
  }

  createInstruction(instruction: Instruction) {
    return this.apollo.mutate({
      mutation: CREATE_INSTRUCTION_MUTATION,
      variables: {
        patientId: instruction.patientId,
        text: instruction.text,
        date: instruction.date,
      }
    }).map(response => response.data);
  }

  createInformation(information: Information) {
    return this.apollo.mutate({
      mutation: CREATE_MUTATION_INFORMATION,
      variables: {
        patientId: information.patientId,
        Temp: information.Temp,
        FC: information.FC,
        FR: information.FR,
        PA: information.PA,
        SaO2: information.SaO2,
        date: information.date,
      },
      refetchQueries: [{ query: PATIENT_QUERY, variables: { id: information.patientId } }]
    }).map(response => response.data);
  }

  createBilan(bilan: Bilan) {
    const variables = bilan;

    return this.apollo.mutate({
      mutation: CREATE_BILAN_MUTATION,
      variables,
      refetchQueries: [{ query: PATIENT_QUERY, variables: { id: bilan.patientId } }]
    }).map(response => response.data);
  }

  updateBilan(bilan: Bilan) {
    const variables = bilan;

    return this.apollo.mutate({
      mutation: UPDATE_BILAN_MUTATION,
      variables,
      refetchQueries: [{ query: PATIENT_QUERY, variables: { id: bilan.patientId } }]
    }).map(response => response.data);
  }

  // hematologie

  createHematologie(hematologie: Hematologie) {
    const variables = hematologie;

    return this.apollo.mutate({
      mutation: CREATE_HEMATOLOGIE_MUTATION,
      variables,
      refetchQueries: [{ query: PATIENT_QUERY, variables: { id: hematologie.patientId } }]
    }).map(response => response.data);
  }

  updateHematologie(hematologie: Hematologie) {
    const variables = hematologie;

    return this.apollo.mutate({
      mutation: UPDATE_HEMATOLOGIE_MUTATION,
      variables,
      refetchQueries: [{ query: PATIENT_QUERY, variables: { id: hematologie.patientId } }]
    }).map(response => response.data);
  }

  uploadFile(upload: Upload) {
    return this.apollo.mutate({
      mutation: FILE_UPLOADED_MUTATION,
      variables: {
        patientId: upload.patientId,
        title: upload.title,
        description: upload.description,
        type: upload.type,
        file: upload.file,
        date: upload.date
      },
      refetchQueries: [{ query: PATIENT_QUERY, variables: { id: upload.patientId } }]
    }).map(res => res.data);
  }

  createTraitement(taritement: Traitement) {
    return this.apollo.mutate({
      mutation: CREATE_MUTATION_TRAITEMENT,
      variables: {
        patientId: taritement.patientId,
        text: taritement.text,
        date: taritement.date,
      },
      refetchQueries: [{ query: PATIENT_QUERY, variables: { id: taritement.patientId } }]
    }).map(response => response.data);
  }

  addMedcinPatient(member: Member) {
    return this.apollo.mutate({
      mutation: CREATE_MUTATION_addMedcinPatient,
      variables: {
        medcinId: member.medcinId,
        patientId: member.patientId
      },
      refetchQueries: [{ query: PATIENT_QUERY, variables: { id: member.patientId } }]
    }).map(response => response.data);
  }

}
