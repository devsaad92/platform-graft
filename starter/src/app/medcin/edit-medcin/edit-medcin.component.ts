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
  id: string;
  medcin: Medcin = {};


  constructor(private fb: FormBuilder, private medcinService: MedcinService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      specialty: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.required]
    });

    this.getMedcin();
  }

  getMedcin() {
    this.id = this.route.snapshot.params['id'];
    this.medcinService.getOne(this.id)
      .subscribe(medcin => {
        this.medcin = medcin.medcinQuery;
        this.loading = medcin.loading;
      });
  }

  updateMedcin() {
    this.medcinService.updateMedcin(this.id, this.form.value)
      .subscribe(() => {
        this.router.navigate(['medcin/medcins']);
      });
  }

  deleteMedcin() {
    this.medcinService.delete(this.id)
      .subscribe(() => {
        this.router.navigate(['medcin/medcins']);
      });
  }

}