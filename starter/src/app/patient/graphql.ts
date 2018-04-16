import { Patient } from '../shared/models/Patient';
import gql from 'graphql-tag';

// query


export const ALL_PATIENTS_QUERY = gql`
  query {
    allPatients {
      id
      firstName
      lastName
      dateDeNaissance
      sexe
      dateDeGreffe
    }
  }
`;

export interface AllPatientQueryResponse {
    allPatients: Patient[];
    loading: boolean;
}

// query with args

export const PATIENT_QUERY = gql`
  query patientQuery($id: Int!) {
    patientQuery(id: $id) {
      id
      firstName
      lastName
      dateDeNaissance
      sexe
      dateDeGreffe
    }
  }
`;

export interface PatientQueryResponse {
    patientQuery: Patient;
    loading: boolean;
}


// mutation create Patient

export const CREATE_PATIENT_MUTATION = gql`

  mutation createPatientMutation(
       $firstName: String!, $lastName: String!, $dateDeNaissance: String!, $sexe: String!, $dateDeGreffe: String) {
    createPatient(
      firstName: $firstName,
      lastName: $lastName,
      dateDeNaissance: $dateDeNaissance,
      sexe: $sexe,
      dateDeGreffe: $dateDeGreffe
    ) {
      id
      firstName
      lastName
      dateDeNaissance
      sexe
      dateDeGreffe
    }
  }
`;

// mutation {
//     createPatient(firstName: "aaaaaaa", lastName: "bbbbb", sexe: "Famele", dateDeNaissance: "02/03/1992"){
//         id
//         firstName
//         lastName
//         sexe
//         dateDeGreffe
//         dateDeNaissance
//     }
// }

export interface CreatePatientMutationResponse {
    loading: boolean;
    createPatient: Patient;
}
