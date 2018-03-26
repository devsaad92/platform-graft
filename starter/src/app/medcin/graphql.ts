import { Medcin } from '../shared/models/Medcin';
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
    }

    login(
      email: $email,
      password: $password
    ) {
      token
    }
  }
`;

export interface CreateMedcinMutationResponse {
  loading: boolean;
  createMedcin: Medcin;
  login: {
  token: string
  };
}

// mutation login

export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    login(
      email: $email,
      password: $password
    ) {
      token
    }
  }
`;


export interface SigninUserMutationResponse {
  loading: boolean;
  login: {
    token: string
  };
}

// mutation upadate of medcin

export const UPDATE_MEDCIN_MUTATION = gql`

  mutation updateMedcinMutation($id: Int!, $firstName: String!, $lastName: String!, $dateDeNaissance: String, $sexe: String,
   $specialty: String!, $email: String!) {
    updateMedcin(
      id: $id
      firstName: $firstName,
      lastName: $lastName,
      dateDeNaissance: $dateDeNaissance,
      sexe: $sexe,
      specialty: $specialty,
      email: $email
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
  medcin: Medcin;
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
    medcinAdded {
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
  medcin: Medcin;
}

