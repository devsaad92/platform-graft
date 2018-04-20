import { Patient } from './../../shared/models/Patient';
import { Clinique } from './../../shared/models/Clinique';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import {
  ALL_PATIENTS_QUERY,
  AllPatientQueryResponse,
  CREATE_PATIENT_MUTATION,
  PATIENT_QUERY,
  PatientQueryResponse,
  CREATE_CLINIQUE_MUTATION,
  CREATE_INSTRUCTION_MUTATION
} from './../graphql';
import { Instruction } from '../../shared/models/Instruction';

@Injectable()
export class PatientService {

  constructor(private apollo: Apollo) { }

  getDate(dateString) {
    const today = +Date.now();
    const date = +new Date(dateString).getTime();
    const diff = (today - date) / (30 * 24 * 60 * 60 * 1000);
    return Math.trunc(diff / 12) + ' Ans  ' + (Math.trunc(diff % 12) + 1) + ' Mois';
  }

  // getDateTime(dateString) {
  //   return new Date(dateString);
  // }

  getJour(dateString) {
    if (!dateString) {
      return '';
    }
    const today = +Date.now();
    const date = +new Date(dateString).getTime();
    const diff = (today - date) / (24 * 60 * 60 * 1000);
    return Math.trunc(diff) + 'Jrs Aprés greffe';
  }

  getAll() {
    return this.apollo.watchQuery<AllPatientQueryResponse>({
      query: ALL_PATIENTS_QUERY,
    }).valueChanges.map(response => response.data);
  }

  getOne(id) {
    return this.apollo.watchQuery<PatientQueryResponse>({
      query: PATIENT_QUERY,
      variables: {
        id
      }
    }).valueChanges.map(response => response.data);
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

}
