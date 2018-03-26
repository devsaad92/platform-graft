import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import {
  ALL_MEDCINS_QUERY,
  CREATE_MEDCIN_MUTATION,
  DELETE_MEDCIN_MUTATION,
  MEDCIN_QUERY,
  SIGNIN_USER_MUTATION,
  UPDATE_MEDCIN_MUTATION,
} from './../../medcin/graphql';
import { DataService } from './data.service';

@Injectable()
export class MedcinService extends DataService {

  constructor(apollo: Apollo) {
    super(apollo, ALL_MEDCINS_QUERY, MEDCIN_QUERY, DELETE_MEDCIN_MUTATION);
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

}

