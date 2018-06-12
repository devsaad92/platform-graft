import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

import { Medcin } from '../../shared/models/Medcin';
import { MedcinService } from './../../shared/services/medcin.service';

// const password = new FormControl('', Validators.required);


@Component({
  selector: 'app-add-medcin',
  templateUrl: './add-medcin.component.html',
  styleUrls: ['./add-medcin.component.scss']
})
export class AddMedcinComponent implements OnInit {
  public form: FormGroup;
  selected = '';


  constructor(private fb: FormBuilder, private medcinService: MedcinService, private router: Router) { }

  ngOnInit() {
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

  createMedcin() {
    const { id, fname, lname, date, specialty, gender, email, password } = this.form.value;
    const medcin = new Medcin(id, fname, lname, gender, date, specialty, email, password);
    this.medcinService.signupMedcin(medcin)
      .subscribe(() => this.router.navigate(['medcin/medcins']));

    /*
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
      //   IMPORTANT
       update: (store, { data: { createMedcin } }) => {
        const data: any = store.readQuery({
          query: ALL_MEDCINS_QUERY
        });

        const dateN = new Date(createMedcin['dateDeNaissance']);
        createMedcin['dateDeNaissance'] = dateN.toLocaleDateString();

        data.allMedcins.push(createMedcin);
        store.writeQuery({ query: ALL_MEDCINS_QUERY, data });
      },   ///   FIN
     }).subscribe((response) => {
      this.router.navigate(['medcin/medcins']);
    });
 */
  }

  annulerForm() {
    this.router.navigate(['medcin/medcins']);

  }

}
