import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { Patient } from './../../../shared/models/Patient';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html'
})
export class EditPatientComponent implements OnInit {
  public form: FormGroup;
  @Input()
  patient: Patient = {};
  @Input() patientId: number;
  @Output() annulerPatientForm = new EventEmitter();
  @Output() updateForm = new EventEmitter();

  constructor(private fb: FormBuilder, private patientService: PatientService) { }

  ngOnInit() {
    const dateGreffe = this.getDateDeGreffe(this.patient.dateDeGreffe);
    this.form = this.fb.group({
      fname: [this.patient.firstName, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [this.patient.lastName, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      date: [new Date(this.patient.dateDeNaissance), Validators.compose([Validators.required, CustomValidators.date])],
      dateGreffe: [dateGreffe, Validators.compose([CustomValidators.date])],
      gender: [this.patient.sexe, Validators.required]
    });
  }

  annulerForm() {
    this.annulerPatientForm.emit();
  }

  getDateDeGreffe(datestring) {
    if (this.patient.dateDeGreffe) {
      return new Date(this.patient.dateDeGreffe);
    }
    return null;
  }

  onSubmit() {
    const { fname, lname, date, dateGreffe, gender } = this.form.value;
    const patient = new Patient(this.patientId, fname, lname, gender, date, dateGreffe);
    this.patientService.updatePatient(patient)
      .subscribe(() => this.updateForm.emit());
  }
}
