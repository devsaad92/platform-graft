import { AuthService } from './../../../shared/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

import { Medcin } from './../../../shared/models/Medcin';
import { Member } from './../../../shared/models/Member';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html'
})
export class MembresComponent implements OnInit {
  @Input() medcins: Medcin[];
  @Input() members: Medcin[];
  @Input() patientId;
  medcinId: number;
  selected = '0';
  selecte = [];
  member: Member;
  admin = 0;
  memberAdmin: Boolean;

  constructor(private patientService: PatientService, private authService: AuthService) {
    this.admin = this.authService.currentUser.roleId;
  }

  ngOnInit() {
    if (this.members) {
    const mb = this.members.find(member => {
      return member.id === this.admin;
    });
    this.memberAdmin = mb['admin'];
  }
    // console.log(this.memberAdmin);
  }

  addPatientMember() {
    const member = new Member(this.medcinId, this.patientId);
    this.patientService.addMedcinPatient(member).subscribe(() => this.selected = '0');
  }

  onSelectRow() {
    const { id, admin } = this.selecte[0];
    this.member = { medcinId: id, patientId: this.patientId, isAdmin: admin };
  }

  setMemberAdmin() {
    if (this.member && this.member.isAdmin) {
      this.member.isAdmin = false;
      this.patientService.updateMember(this.member).subscribe();
      return;
    } if (this.member && !this.member.isAdmin) {
      this.member.isAdmin = true;
      this.patientService.updateMember(this.member).subscribe();
      return;
    }
  }

  deleteMm(value) {
    console.log(value);
  }

 }
