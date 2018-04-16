import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import {
  ALL_PATIENTS_QUERY,
  AllPatientQueryResponse,
  CREATE_PATIENT_MUTATION,
  PATIENT_QUERY,
  PatientQueryResponse,
} from './../graphql';

@Injectable()
export class PatientService {

  constructor(private apollo: Apollo) { }

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

  createPatient(patient) {
    return this.apollo.mutate({
      mutation: CREATE_PATIENT_MUTATION,
      variables: {
        firstName: patient.fname,
        lastName: patient.lname,
        dateDeNaissance: patient.date,
        sexe: patient.gender,
        dateDeGreffe: patient.dateGreffe
      }
     // refetchQueries: [{ query: ALL_PATIENTS_QUERY }]
    }).map(response => response.data);
  }

}
