import { Medcin } from './../models/Medcin';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import {
  ALL_MEDCINS_QUERY,
  AllMedcinQueryResponse,
  CREATE_MEDCIN_MUTATION,
  SIGNUP_MEDCIN_MUTATION,
  DELETE_MEDCIN_MUTATION,
  FORGET_PASSWORD_MUTATION,
  MEDCIN_QUERY,
  MedcinQueryResponse,
  RESET_PASSWORD_MUTATION,
  SIGNIN_USER_MUTATION,
  UPDATE_MEDCIN_MUTATION,
} from './../../medcin/graphql';


@Injectable()
export class MedcinService {

  constructor(private apollo: Apollo) { }

  getAll() {
    return this.apollo.watchQuery<AllMedcinQueryResponse>({
      query: ALL_MEDCINS_QUERY
      // pollInterval: 1000,
    }).valueChanges.map(response => response.data);
  }

  getOne(id) {
    return this.apollo.watchQuery<MedcinQueryResponse>({
      query: MEDCIN_QUERY,
      variables: {
        id
      }
    }).valueChanges.map(response => response.data);
  }


  delete(id) {
    return this.apollo.mutate({
      mutation: DELETE_MEDCIN_MUTATION,
      variables: {
        id
      },
      refetchQueries: [{ query: ALL_MEDCINS_QUERY }]
    });
  }

  login(value) {
    return this.apollo.mutate({
      mutation: SIGNIN_USER_MUTATION,
      variables: {
        email: value.uname,
        password: value.password
      }
    }).map(response => response.data);
  }

  createMedcin(medcin: Medcin) {
    return this.apollo.mutate({
      mutation: CREATE_MEDCIN_MUTATION,
      variables: {
        firstName: medcin.firstName,
        lastName: medcin.lastName,
        dateDeNaissance: medcin.dateDeNaissance,
        sexe: medcin.sexe,
        specialty: medcin.specialty,
        email: medcin.email,
        password: medcin.password
      },
    }).map(response => response.data);
  }

  signupMedcin(medcin: Medcin) {
    const variables = medcin;
    return this.apollo.mutate({
      mutation: SIGNUP_MEDCIN_MUTATION,
      variables,
      refetchQueries: [{ query: ALL_MEDCINS_QUERY }]
      }).map(response => response.data);
  }

  updateMedcin(medcin: Medcin) {
    return this.apollo.mutate({
      mutation: UPDATE_MEDCIN_MUTATION,
      variables: {
        id: medcin.id,
        firstName: medcin.firstName,
        lastName: medcin.lastName,
        dateDeNaissance: medcin.dateDeNaissance,
        sexe: medcin.sexe,
        specialty: medcin.specialty,
        email: medcin.email,
        roleId: medcin.roleId
      },
      refetchQueries: [{ query: ALL_MEDCINS_QUERY }]
    });
  }

  forgetPassword(email: string) {
    return this.apollo.mutate({
      mutation: FORGET_PASSWORD_MUTATION,
      variables: {
        email
      }
    });
  }

  resetPassword(email: string, newpass: string) {
    return this.apollo.mutate({
      mutation: RESET_PASSWORD_MUTATION,
      variables: {
        email,
        newPassword: newpass
      }
    });
  }

}
