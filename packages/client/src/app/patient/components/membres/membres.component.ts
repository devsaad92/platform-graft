import { Member } from './../../../shared/models/Member';
import { PatientService } from './../../services/patient.service';
import { MatTableDataSource } from '@angular/material';
import { Medcin } from './../../../shared/models/Medcin';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html'
})
export class MembresComponent implements OnChanges {
  @Input() medcins: Medcin[];
  @Input() members: Medcin[];
  @Input() patientId;
  medcinId: number;
  displayedColumns = ['id', 'firstName', 'lastName']; // 'admin', 'isAuthorize'];
  dataSource: any;
  selected = '0';

  constructor(private patientService: PatientService) { }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.members);
    console.log(this.medcins);
  }

  addPatientMember() {
    const member = new Member(this.medcinId, this.patientId);
    this.patientService.addMedcinPatient(member).subscribe(() => this.selected = '0');
  }
}
