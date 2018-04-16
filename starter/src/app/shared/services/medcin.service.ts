import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import {
  ALL_MEDCINS_QUERY,
  AllMedcinQueryResponse,
  CREATE_MEDCIN_MUTATION,
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
    //  .catch(this.handleError);
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

  createMedcin(medcin) {
    return this.apollo.mutate({
      mutation: CREATE_MEDCIN_MUTATION,
      variables: {
        firstName: medcin.fname,
        lastName: medcin.lname,
        dateDeNaissance: medcin.date,
        sexe: medcin.gender,
        specialty: medcin.specialty,
        email: medcin.email,
        password: medcin.password
      },
      refetchQueries: [{ query: ALL_MEDCINS_QUERY}]
    }).map(response => response.data);
  }

  updateMedcin(id: string, medcin) {
    return this.apollo.mutate({
      mutation: UPDATE_MEDCIN_MUTATION,
      variables: {
        id,
        firstName: medcin.fname,
        lastName: medcin.lname,
        dateDeNaissance: medcin.date,
        sexe: medcin.gender,
        specialty: medcin.specialty,
        email: medcin.email
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

  resetPassword(id: number, newpass: string) {
    return this.apollo.mutate({
      mutation: RESET_PASSWORD_MUTATION,
      variables: {
        userId: id,
        newPassword: newpass
      }
    });
  }

}
