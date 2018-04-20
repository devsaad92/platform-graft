import gql from 'graphql-tag';

import { Patient } from './../shared/models/Patient';

// query

const patientFragments = {
  patient: gql`
    fragment patientInfos on Patient {
      id
      firstName
      lastName
      dateDeNaissance
      sexe
      dateDeGreffe
    }
  `,
};


export const ALL_PATIENTS_QUERY = gql`
  query {
    allPatients {
      ...patientInfos
    }
  }
  ${patientFragments.patient}
`;

export interface AllPatientQueryResponse {
    allPatients: Patient[];
    loading: boolean;
}

// query with args

export const PATIENT_QUERY = gql`
  query patientQuery($id: Int!) {
    getPatient(id: $id) {
      ...patientInfos
      ...bilans
      ...instructions
      ...cliniques
      ...traitements
    }
  }
  fragment instructions on Patient {
    instructions {
      id
      text
      date
      medcin {
        id
        firstName
        lastName
      }
    }
  }
  fragment cliniques on Patient {
    cliniques {
      id
      text
      date
      medcin {
        id
        firstName
        lastName
      }
    }
  }
  fragment traitements on Patient {
    traitements {
      id
      text
      date
    }
  }
  fragment bilans on Patient {
    bilans {
      id
      soduim
      crp
      magnesuim
      glucose
      ggt
      potassuim
      uree
      calcuim
      ldh
      sgpt
      albumine
      lipase
      date
    }
  }
  ${patientFragments.patient}
`;

export interface PatientQueryResponse {
  getPatient: Patient;
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
      ...patientInfos
    }
  }
  ${patientFragments.patient}
`;

export interface CreatePatientMutationResponse {
    loading: boolean;
    createPatient: Patient;
}

export const CREATE_CLINIQUE_MUTATION = gql`
  mutation createCliniqueMutation($patientId: Int!, $text: String!, $date: String!){
    createClinique(patientId: $patientId, text: $text, date: $date){
      id
    }
  }
`;

export const CREATE_INSTRUCTION_MUTATION = gql`
  mutation createInstructionMutation($patientId: Int!, $text: String!, $date: String!){
    createInstruction(patientId: $patientId, text: $text, date: $date){
      id
    }
  }
`;
