import { Medcin } from '../types';
import gql from 'graphql-tag';

// query
export const ALL_MEDCINS_QUERY = gql`
  query {
    allMedcins {
      id
      firstName
      lastName
      dateDeNaissance
      sexe
      specialty
      email
    }
  }
`;

export interface AllMedcinQueryResponse {
    allMedcins: Medcin[];
    loading: boolean;
}

// query with args

export const MEDCIN_QUERY = gql`
  query MedcinQuery($id: Int!) {
    medcinQuery(id: $id) {
      id
      firstName
      lastName
      dateDeNaissance
      sexe
      specialty
      email
      password
    }
  }
`;

export interface MedcinQueryResponse {
  medcinQuery: Medcin;
  loading: boolean;
}


// mutation create Medcin

export const CREATE_MEDCIN_MUTATION = gql`

  mutation createMedcinMutation($firstName: String!, $lastName: String!, $dateDeNaissance: String, $sexe: String, $specialty: String!,
  $email: String!, $password: String!) {
    createMedcin(
      firstName: $firstName,
      lastName: $lastName,
      dateDeNaissance: $dateDeNaissance,
      sexe: $sexe,
      specialty: $specialty,
      email: $email,
      password: $password
    ) {
      id
      firstName
      lastName
      dateDeNaissance
      sexe
      specialty
      email
    }
  }
`;

export interface CreateMedcinMutationResponse {
  // medcin: Medcin;
  loading: boolean;
}

// mutation upadate of medcin

export const UPDATE_MEDCIN_MUTATION = gql`

  mutation updateMedcinMutation($id: Int!, $firstName: String!, $lastName: String!, $dateDeNaissance: String, $sexe: String,
   $specialty: String!, $email: String!, $password: String!) {
    updateMedcin(
      id: $id
      firstName: $firstName,
      lastName: $lastName,
      dateDeNaissance: $dateDeNaissance,
      sexe: $sexe,
      specialty: $specialty,
      email: $email,
      password: $password
    ) {
      id
      firstName
      lastName
      dateDeNaissance
      sexe
      specialty
      email
    }
  }
`;

export interface UpdateMedcinMutationResponse {
 // medcin: Medcin;
  loading: boolean;
}

// mutation delete of medcin


export const DELETE_MEDCIN_MUTATION = gql`

  mutation deleteteMedcinMutation($id: Int!) {
    deleteMedcin(
      id: $id
    ) {
      id
    }
  }
`;

export interface DeleteMedcinMutationResponse {
  // medcin: Medcin;
   loading: boolean;
}


//  subscribtion

export const NEW_MEDCINS_SUBSCRIPTION = gql`
  subscription {
    newMedcin {
      id
      firstName
      lastName
      dateDeNaissance
      sexe
      specialty
      email
      }
  }
`;

export interface NewMedcinSubcriptionResponse {
  node: Medcin;
}

