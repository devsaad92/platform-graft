import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

import { PatientService } from './../../patient/services/patient.service';
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
  public selected : any;
  displayedColumns = ['id', 'firstName', 'lastName'];
  dataSource: any;
  patients: Patient[];

  constructor(private fb: FormBuilder, private medcinService: MedcinService,
              private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      specialty: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.required]
    });

    this.getMedcin();
    this.getPatients();
  }

  getMedcin() {
    this.id = this.route.snapshot.params['id'];
    this.medcinService.getOne(this.id)
      .subscribe(medcin => {
        this.medcin = medcin.medcinQuery;
      });
  }

  getPatients() {
    this.patientService.getAll()
      .subscribe(patients => {
        this.patients = patients.allPatients;
        this.dataSource = new MatTableDataSource(this.patients);
      });
  }

  updateMedcin() {
    this.switch = false;
  }

  addPatientMember() {
    console.log('12345');
  }

}
