import { PatientService } from './../../services/patient.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from '../../../shared/models/Patient';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {
  @Input() patient: Patient = {};
  @Input() lastInformation:any;

  @Output() updatePatientForm = new EventEmitter();
  @Output() addInforForm = new EventEmitter();
  @Output() afficherInforForm = new EventEmitter();

  constructor(private patientService: PatientService) { }

  ngOnInit() {

    
 
  }

  updatePatient() {
    this.updatePatientForm.emit();
  }

  ajouterInformation() {
    this.addInforForm.emit();
  }

  afficherInformations() {
    this.afficherInforForm.emit();
  }
}
