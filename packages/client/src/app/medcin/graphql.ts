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
      roleId
      patients{
        id
        firstName
        lastName
      }
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
      ok
      token
      refreshToken
    }
  }
`;

export interface CreateMedcinMutationResponse {
  loading: boolean;
  createMedcin: Medcin;
  login: {
    ok: boolean,
    token: string,
    refreshToken: string
  };
}

// signUp added by admin

export const SIGNUP_MEDCIN_MUTATION = gql`
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
  }
`;

// mutation login

export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    login(
      email: $email,
      password: $password
    ) {
      ok
      token
      refreshToken
    }
  }
`;


export interface SigninUserMutationResponse {
  loading: boolean;
  login: {
    ok: boolean,
    token: string,
    refreshToken: string
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
    )
  }
`;

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


export const FORGET_PASSWORD_MUTATION = gql`

  mutation ForgetPasswordMutation($email: String!) {
    forgetPassword(
      email: $email
    ) {
      id
    }
  }
`;

export interface ForgetPasswordMutationResponse {
  loading: boolean;
}

export const RESET_PASSWORD_MUTATION = gql`

  mutation ResetPasswordMutation($userId: Int!, $newPassword: String!) {
    resetPassword(
      userId: $userId,
      newPassword: $newPassword
    )
  }
`;

export interface ResetPasswordMutationResponse {
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

