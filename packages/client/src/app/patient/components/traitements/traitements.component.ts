import { Component, Input } from '@angular/core';

import { Traitement } from './../../../shared/models/Traitement';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-traitements',
  templateUrl: './traitements.component.html'
})
export class TraitementsComponent {
  @Input() traitements: Traitement[];
  @Input() patientId;
  traitement: Traitement = {};


  constructor(private patientService: PatientService) { }

  addPatientTraitement() {
    this.traitement.patientId = this.patientId;
    this.patientService.createTraitement(this.traitement).
      subscribe(() => this.traitement = {});
  }
}
