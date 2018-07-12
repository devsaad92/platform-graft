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
      ...traitements
      ...informations
      ...uploads
      ...hematologies
      ...medcins
      ...members
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
  fragment uploads on Patient {
    uploads {
      id
      title
      description
      type
      file
      date
    }
  }
  fragment bilans on Patient {
    bilans {
      id
      soduim
      potassuim
      chlore
      uree
      creatinine
      calcuim
      calcuimCorrige
      phosphore
      magnesuim
      glucose
      albumine
      bilirubineT
      bilirubineD
      phosphataseAlcaline
      sgot
      sgpt
      ggt
      ldh
      triglyceride
      cholesterole
      ammonemie
      lactate
      amylase
      lipase
      crp
      date
    }
  }
  fragment hematologies on Patient {
    hematologies {
      id
      gb
      lymphocyte
      monocytes
      neutrophiles
      eosinophiles
      gr
      hb
      ht
      plaquette
      vgm
      ccmh
      retic
      tp
      tca
      inr
      fibrinogene
      facteurV
      antiTIII
      facteurXa
      dDimeres
      date
    }
  }
  fragment medcins on Patient {
    medcins {
      id
      firstName
      lastName
    }
  }
  fragment members on Patient {
    members {
      id
      firstName
      lastName
      specialty
      admin
      isAuthorize
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

// Chat Cliniques
export const newMedcinMessageCliniqueSubscription = gql`
  subscription {
    newMessageClinique {
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

export const MSG_CLINIQUE_QUERY = gql`
  query msgCliniqueQuery($patientId: Int!) {
    cliniques(patientId: $patientId) {
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
`;

export const CREATE_BILAN_MUTATION = gql`
  mutation createBilanMutation(
      $patientId: Int!,
      $nom: String,
      $soduim: String,
      $potassuim: String,
      $chlore: String,
      $uree: String,
      $creatinine: String,
      $calcuim: String,
      $calcuimCorrige: String,
      $phosphore: String,
      $magnesuim: String,
      $glucose: String,
      $albumine: String,
      $bilirubineT: String,
      $bilirubineD: String,
      $phosphataseAlcaline: String,
      $sgot: String,
      $sgpt: String,
      $ggt: String,
      $ldh: String,
      $triglyceride: String,
      $cholesterole: String,
      $ammonemie: String,
      $lactate: String,
      $amylase: String,
      $lipase: String,
      $crp: String,
      $date: String!) {
    createBilan(
      patientId: $patientId,
      nom: $nom,
      soduim: $soduim,
      potassuim: $potassuim,
      chlore: $chlore,
      uree: $uree,
      creatinine: $creatinine,
      calcuim: $calcuim,
      calcuimCorrige: $calcuimCorrige,
      phosphore: $phosphore,
      magnesuim: $magnesuim,
      glucose: $glucose,
      albumine: $albumine,
      bilirubineT: $bilirubineT,
      bilirubineD: $bilirubineD,
      phosphataseAlcaline: $phosphataseAlcaline,
      sgot: $sgot,
      sgpt: $sgpt,
      ggt: $ggt,
      ldh: $ldh,
      triglyceride: $triglyceride,
      cholesterole: $cholesterole,
      ammonemie: $ammonemie,
      lactate: $lactate,
      amylase: $amylase,
      lipase: $lipase,
      crp: $crp,
      date: $date
    )
  }
`;

export const UPDATE_BILAN_MUTATION = gql`
  mutation updateBilanMutation(
      $id: Int!,
      $nom: String,
      $soduim: String,
      $potassuim: String,
      $chlore: String,
      $uree: String,
      $creatinine: String,
      $calcuim: String,
      $calcuimCorrige: String,
      $phosphore: String,
      $magnesuim: String,
      $glucose: String,
      $albumine: String,
      $bilirubineT: String,
      $bilirubineD: String,
      $phosphataseAlcaline: String,
      $sgot: String,
      $sgpt: String,
      $ggt: String,
      $ldh: String,
      $triglyceride: String,
      $cholesterole: String,
      $ammonemie: String,
      $lactate: String,
      $amylase: String,
      $lipase: String,
      $crp: String,
      $date: String) {
    updateBilan(
      id: $id
      nom: $nom,
      soduim: $soduim,
      potassuim: $potassuim,
      chlore: $chlore,
      uree: $uree,
      creatinine: $creatinine,
      calcuim: $calcuim,
      calcuimCorrige: $calcuimCorrige,
      phosphore: $phosphore,
      magnesuim: $magnesuim,
      glucose: $glucose,
      albumine: $albumine,
      bilirubineT: $bilirubineT,
      bilirubineD: $bilirubineD,
      phosphataseAlcaline: $phosphataseAlcaline,
      sgot: $sgot,
      sgpt: $sgpt,
      ggt: $ggt,
      ldh: $ldh,
      triglyceride: $triglyceride,
      cholesterole: $cholesterole,
      ammonemie: $ammonemie,
      lactate: $lactate,
      amylase: $amylase,
      lipase: $lipase,
      crp: $crp,
      date: $date
    )
  }
`;

// Hematologie

export const CREATE_HEMATOLOGIE_MUTATION = gql`
  mutation createHematologieMutation(
      $patientId: Int!,
      $gb: String,
      $lymphocyte: String,
      $monocytes: String,
      $neutrophiles: String,
      $eosinophiles: String,
      $gr: String,
      $hb: String,
      $ht: String,
      $plaquette: String,
      $vgm: String,
      $ccmh: String,
      $retic: String,
      $tp: String,
      $tca: String,
      $inr: String,
      $fibrinogene: String,
      $facteurV: String,
      $antiTIII: String,
      $facteurXa: String,
      $dDimeres: String,
      $date: String!) {
    createHematologie(
      patientId: $patientId,
      gb: $gb,
      lymphocyte: $lymphocyte,
      monocytes: $monocytes,
      neutrophiles: $neutrophiles,
      eosinophiles: $eosinophiles,
      gr: $gr,
      hb: $hb,
      ht: $ht,
      plaquette: $plaquette,
      vgm: $vgm,
      ccmh: $ccmh,
      retic: $retic,
      tp: $tp,
      tca: $tca,
      inr: $inr,
      fibrinogene: $fibrinogene,
      facteurV: $facteurV,
      antiTIII: $antiTIII,
      facteurXa: $facteurXa,
      dDimeres: $dDimeres,
      date: $date
    )
  }
`;

export const UPDATE_HEMATOLOGIE_MUTATION = gql`
  mutation updateHematologieMutation(
      $id: Int!,
      $gb: String,
      $lymphocyte: String,
      $monocytes: String,
      $neutrophiles: String,
      $eosinophiles: String,
      $gr: String,
      $hb: String,
      $ht: String,
      $plaquette: String,
      $vgm: String,
      $ccmh: String,
      $retic: String,
      $tp: String,
      $tca: String,
      $inr: String,
      $fibrinogene: String,
      $facteurV: String,
      $antiTIII: String,
      $facteurXa: String,
      $dDimeres: String,
      $date: String) {
    updateHematologie(
      id: $id
      gb: $gb,
      lymphocyte: $lymphocyte,
      monocytes: $monocytes,
      neutrophiles: $neutrophiles,
      eosinophiles: $eosinophiles,
      gr: $gr,
      hb: $hb,
      ht: $ht,
      plaquette: $plaquette,
      vgm: $vgm,
      ccmh: $ccmh,
      retic: $retic,
      tp: $tp,
      tca: $tca,
      inr: $inr,
      fibrinogene: $fibrinogene,
      facteurV: $facteurV,
      antiTIII: $antiTIII,
      facteurXa: $facteurXa,
      dDimeres: $dDimeres,
      date: $date
    )
  }
`;

export const FILE_UPLOADED_MUTATION = gql`
  mutation uploadFileMutation(
      $patientId: Int!,
      $title: String,
      $description: String,
      $type: String,
      $file: File,
      $date: String!) {
    uploadFile(
      patientId: $patientId,
      title: $title,
      description: $description,
      type: $type,
      file: $file,
      date: $date
    )
  }
`;

export const CREATE_MUTATION_TRAITEMENT = gql`
  mutation createTraitementMutation(
      $patientId: Int!,
      $text: String!,
      $date: String!) {
    createTraitement(
      patientId: $patientId,
      text: $text,
      date: $date
    ){
      id
    }
  }
`;

export const UPDATE_MUTATION_TRAITEMENT = gql`
  mutation updateTraitementMutation(
      $id: Int!,
      $text: String,
      $date: String) {
    updateTraitement(
      id: $id,
      text: $text,
      date: $date
    )
  }
`;

export const CREATE_MUTATION_addMedcinPatient = gql`
  mutation addMedcinPatient(
    $medcinId: Int!,
    $patientId: Int!,
    ) {
    addMedcinPatient(
      medcinId: $medcinId,
      patientId: $patientId
    )
  }
`;

export const UPDATE_MUTATION_MEMBER = gql`
  mutation  upadeMutationMember(
    $medcinId: Int!,
    $patientId: Int!,
    $admin: Boolean!
    ) {
    updateMember(
      medcinId: $medcinId,
      patientId: $patientId,
      admin: $admin
    )
  }
`;


