import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Apollo } from 'apollo-angular';
import { Medcin } from '../../types';

import { MEDCIN_QUERY, MedcinQueryResponse, UPDATE_MEDCIN_MUTATION, DELETE_MEDCIN_MUTATION, ALL_MEDCINS_QUERY } from '../graphql';

@Component({
  selector: 'app-edit-medcin',
  templateUrl: './edit-medcin.component.html',
  styleUrls: ['./edit-medcin.component.scss']
})
export class EditMedcinComponent implements OnInit {
  public form: FormGroup;
  loading: Boolean = true;
  id: string;
  @Input()
  medcin: Medcin = {
    id: 0,
    firstName: '',
    lastName: '',
    sexe: '',
    specialty: '',
    email: '',
    password: '',
    dateDeNaissance: ''
  };

  constructor(private fb: FormBuilder, private apollo: Apollo, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.apollo.watchQuery<MedcinQueryResponse>({
      query: MEDCIN_QUERY,
      variables: {
        id: this.id
      }
    }).valueChanges.subscribe((response) => {

      this.medcin = response.data.medcinQuery;
      this.loading = response.data.loading;
    });


    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      specialty: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.required],
      password: [null, Validators.required]
    });

  }

  updateMedcin() {
    this.apollo.mutate({
      mutation: UPDATE_MEDCIN_MUTATION,
      variables: {
        id: this.medcin.id,
        firstName: this.form.value['fname'],
        lastName: this.form.value['lname'],
        dateDeNaissance: this.form.value['date'],
        sexe: this.form.value['gender'],
        specialty: this.form.value['specialty'],
        email: this.form.value['email'],
        password: this.form.value['password']
      }
    }).subscribe((response) => {
        this.router.navigate(['medcin/medcins']);
      });
  }

  deleteMedcin() {
    this.apollo.mutate({
      mutation: DELETE_MEDCIN_MUTATION,
      variables: {
        id: this.medcin.id
      }
    }).subscribe((response) => {
      this.router.navigate(['medcin/medcins']);
    });
  }

}
