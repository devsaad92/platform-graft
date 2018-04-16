import { Router } from '@angular/router';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
})
export class AddPatientComponent implements OnInit {
  public form: FormGroup;
  date: Date = new Date();

  constructor(private fb: FormBuilder, private patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      dateGreffe: [null, Validators.compose([Validators.required, CustomValidators.date])],
      gender: [null, Validators.required]
    });
  }

  createPatient() {
    this.patientService.createPatient(this.form.value)
      .subscribe((patient) => console.log(patient));
  }

  annulerForm() {

  }
}
