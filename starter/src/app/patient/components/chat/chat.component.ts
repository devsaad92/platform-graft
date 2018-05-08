import { Instruction } from './../../../shared/models/Instruction';
import { Clinique } from './../../../shared/models/Clinique';
import { AuthService } from './../../../shared/services/auth.service';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input()
  messages: any[];
  @Input() patientId: number;
  @Input() index: number;
  userId: number;
  msg;
  them;
  user;

  constructor(private patientService: PatientService, private authService: AuthService) { }

  ngOnInit() {
    this.userId = this.authService.currentUser.user.id;
  }

  createClinique() {
    const instruction = new Instruction(this.patientId, this.msg, new Date());
    const clinique = new Clinique(this.patientId, this.msg, new Date());
    this.msg = '';
    if (this.index === 0) {
      this.patientService.createClinique(clinique)
       .subscribe(msg => console.log(msg));
      //  this.index = 2;
    }
    if (this.index === 1) {
      this.patientService.createInstruction(instruction)
        .subscribe(msg => console.log(msg));
    }
  }

}
