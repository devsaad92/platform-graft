import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

import { Medcin } from './../../shared/models/Medcin';
import { Patient } from './../../shared/models/Patient';
import { MedcinService } from './../../shared/services/medcin.service';

@Component({
  selector: 'app-medcin-profile',
  templateUrl: './medcin-profile.component.html',
  styleUrls: ['./medcin-profile.component.scss']
})
export class MedcinProfileComponent implements OnInit {
  public form: FormGroup;
  medcin: Medcin = {};
  id: number;
  switch = true;
  displayedColumns = ['id', 'firstName', 'lastName'];
  dataSource: any;
  patients: Patient[];

  constructor(private fb: FormBuilder, private medcinService: MedcinService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
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
        this.patients = this.medcin['patients'];
        this.dataSource = new MatTableDataSource(this.patients);
      });
  }


  updateMedcin() {
    this.switch = false;
  }

}
