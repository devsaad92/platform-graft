import { Medcin } from '../types';
import gql from 'graphql-tag';

// query
export const ALL_MEDCINS_QUERY = gql`
  query {
    allMedcins {
      id
      firstName
      lastName
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


// mutation create Medcin

export const CREATE_MEDCIN_MUTATION = gql`

  mutation createMedcinMutation($firstName: String!, $lastName: String!, $sexe: String, $specialty: String!,
  $email: String!, $password: String!) {
    createMedcin(
      firstName: $firstName,
      lastName: $lastName
      sexe: $sexe,
      specialty: $specialty,
      email: $email,
      password: $password
    ) {
      id
      firstName
      lastName
      sexe
      specialty
      email
    }
  }
`;

export interface CreateMedcinMutationResponse {
  medcin: Medcin;
  loading: boolean;
}

