import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

import { Medcin } from '../../shared/models/Medcin';
import { MedcinService } from './../../shared/services/medcin.service';

@Component({
  selector: 'app-edit-medcin',
  templateUrl: './edit-medcin.component.html',
  styleUrls: ['./edit-medcin.component.scss']
})
export class EditMedcinComponent implements OnInit {
  public form: FormGroup;
  loading: Boolean;
  id: number;
  medcin: Medcin = {};
  public selected : any;


  constructor(private fb: FormBuilder, private medcinService: MedcinService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [this.medcin.firstName, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [this.medcin.lastName, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      email: [this.medcin.email, Validators.compose([Validators.required, CustomValidators.email])],
      date: [new Date(this.medcin.dateDeNaissance), Validators.compose([CustomValidators.date])],
      specialty: [this.medcin.specialty, Validators.compose([Validators.required])],
      gender: [this.medcin.sexe, Validators.required]
    });

    this.getMedcin();
  }

  getMedcin() {
    this.id = this.route.snapshot.params['id'];
    this.medcinService.getOne(this.id)
      .subscribe(medcin => {
        this.medcin = medcin.medcinQuery;
      });
  }

  onSubmit() {
    const { fname, lname, date, specialty, gender, email, password } = this.form.value;
    const medcin = new Medcin(this.id, fname, lname, gender, date, specialty, email, password);
    this.medcinService.updateMedcin(medcin)
      .subscribe(() => this.router.navigate(['medcin/medcins']));
  }

  deleteMedcin() {
    this.medcinService.delete(this.id)
      .subscribe(() => {
        this.router.navigate(['medcin/medcins']);
      });
  }

}
