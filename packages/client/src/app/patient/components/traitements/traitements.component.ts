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
  selected = [];

  constructor(private patientService: PatientService) { }

  addPatientTraitement() {
    this.traitement.patientId = this.patientId;
    if (this.traitement.id) {
      this.patientService.updateTraitement(this.traitement).subscribe(() => this.traitement = {});
    } else {
      this.patientService.createTraitement(this.traitement).
        subscribe(() => this.traitement = {});
    }
  }

  onSelectRow() {
    const { id, date, text } = this.selected[0];
    const dt = new Date(date);
    this.traitement = { text, date: dt, id };
  }
}
