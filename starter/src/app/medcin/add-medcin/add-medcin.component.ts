import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Medcin } from '../../types';
import { ALL_MEDCINS_QUERY, CREATE_MEDCIN_MUTATION, CreateMedcinMutationResponse } from '../graphql';

const password = new FormControl('', Validators.required);


@Component({
  selector: 'app-add-medcin',
  templateUrl: './add-medcin.component.html',
  styleUrls: ['./add-medcin.component.scss']
})
export class AddMedcinComponent implements OnInit {
  public form: FormGroup;
  medcin: Medcin;
  selected = 'chirigein';


  constructor(private fb: FormBuilder, private apollo: Apollo, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      specialty: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.required],
      password: password
    });
  }

  createMedcin() {

    this.apollo.mutate({
       mutation: CREATE_MEDCIN_MUTATION,
      variables: {
        firstName: this.form.controls['fname'].value,
        lastName: this.form.controls['lname'].value,
        dateDeNaissance: this.form.controls['date'].value,
        sexe: this.form.controls['gender'].value,
        specialty: this.form.controls['specialty'].value,
        email: this.form.controls['email'].value,
        password: this.form.controls['password'].value
      },
      update: (store, { data: { createMedcin } }) => {
        const data: any = store.readQuery({
          query: ALL_MEDCINS_QUERY
        });

        const dateN = new Date(createMedcin['dateDeNaissance']);
        createMedcin['dateDeNaissance'] = dateN.toLocaleDateString();

        data.allMedcins.push(createMedcin);
        store.writeQuery({ query: ALL_MEDCINS_QUERY, data });
      },
    }).subscribe((response) => {
      this.router.navigate(['medcin/medcins']);
    });

  }

  annulerForm() {
    this.router.navigate(['medcin/medcins']);

  }

}
