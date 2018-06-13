import { Component, Input } from '@angular/core';

import { Medcin } from './../../../shared/models/Medcin';
import { Member } from './../../../shared/models/Member';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html'
})
export class MembresComponent {
  @Input() medcins: Medcin[];
  @Input() members: Medcin[];
  @Input() patientId;
  medcinId: number;
  selected = '0';

  constructor(private patientService: PatientService) {}

  addPatientMember() {
    const member = new Member(this.medcinId, this.patientId);
    this.patientService.addMedcinPatient(member).subscribe(() => this.selected = '0');
  }
}
