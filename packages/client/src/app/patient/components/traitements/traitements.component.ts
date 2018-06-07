import { PatientService } from './../../services/patient.service';
import { MatTableDataSource } from '@angular/material';
import { Traitement } from './../../../shared/models/Traitement';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-traitements',
  templateUrl: './traitements.component.html'
})
export class TraitementsComponent implements OnChanges {
  @Input() traitements: Traitement[];
  @Input() patientId;
  displayedColumns = ['date', 'text'];
  dataSource: any;
  traitement: Traitement = {};


  constructor(private patientService: PatientService) { }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.traitements);
  }

  addPatientTraitement() {
    this.traitement.patientId = this.patientId;
    this.patientService.createTraitement(this.traitement).
      subscribe(() => this.traitement = {});
  }
}
