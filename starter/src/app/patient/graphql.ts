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
      ...informations
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
  fragment informations on Patient {
    informations {
      id
      Temp
      FC
      FR
      PA
      SaO2
      date
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

export const UPDATE_PATIENT_MUTATION = gql`

  mutation updatePatientMutation(
    $id: Int!,
    $firstName: String, $lastName: String, $dateDeNaissance: String, $sexe: String,
    $dateDeGreffe: String) {
    updatePatient(
      id: $id
      firstName: $firstName,
      lastName: $lastName,
      dateDeNaissance: $dateDeNaissance,
      sexe: $sexe,
      dateDeGreffe: $dateDeGreffe
    )
  }
`;

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

export const newMedcinMessageSubscription = gql`
  subscription {
    newMessageInstruction {
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
`;

export const MSGINSTRUCTION_QUERY = gql`
  query msgInstructionQuery($patientId: Int!) {
    instructions(patientId: $patientId) {
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
`;

export const CREATE_MUTATION_INFORMATION = gql`
  mutation createInformationMutation(
      $patientId: Int!,
      $Temp: String,
      $FC: String,
      $FR: String,
      $PA: String,
      $SaO2: String,
      $date: String!) {
    createInformation(
      patientId: $patientId,
      Temp: $Temp,
      FC: $FC,
      FR: $FR,
      PA: $PA,
      SaO2: $SaO2,
      date: $date
    ){
      id
    }
  }

`
;

export const CREATE_BILAN_MUTATION = gql`
  mutation createBilanMutation(
      $patientId: Int!,
      $nom: String,
      $soduim: String,
      $crp: String,
      $magnesuim: String,
      $glucose: String,
      $ggt: String,
      $potassuim: String,
      $uree: String,
      $calcuim: String,
      $ldh: String,
      $sgpt: String,
      $albumine: String,
      $lipase: String,
      $date: String!) {
    createBilan(
      patientId: $patientId,
      nom: $nom,
      soduim: $soduim,
      crp: $crp,
      magnesuim: $magnesuim,
      glucose: $glucose,
      ggt: $ggt,
      potassuim: $potassuim,
      uree: $uree,
      calcuim: $calcuim,
      ldh: $ldh,
      sgpt: $sgpt,
      albumine: $albumine,
      lipase: $lipase,
      date: $date
    )
  }

`
  ;
