import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Bilan } from './../../../shared/models/Bilan';
import { Clinique } from './../../../shared/models/Clinique';
import { Hematologie } from './../../../shared/models/hematologie';
import { Instruction } from './../../../shared/models/Instruction';
import { Patient } from './../../../shared/models/Patient';
import { Upload } from './../../../shared/models/upload';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.scss']
})
export class PatientItemComponent implements OnInit {
  patientId: number;
  patient: Patient = {};
  index = 0;
  switch = true;
  switchInfor = true;
  informations = true;
  instructions: Instruction[];
  lastInformation: any ;
  cliniques: Clinique[];
  switchUpload = true;
  bilan: Bilan;
  switchbilan = true;
  switchBilanUp = true;
  hematologie: Hematologie;
  switchHematologie = true;
  switchHematologieUp = true;
  corporels: Upload[];
  bacterologie: Upload[];
  virologie: Upload[];
  parasitologie: Upload[];


  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPatient();

    this.getInstructions();
    this.patientService.subscribeToNewMessages();

    this.getCliniques();
    this.patientService.subscribeToNewMessagesCliniques();
  }

  getPatient() {
    this.patientId = +this.route.snapshot.params['id'];
    this.patientService.getOne(this.patientId)
      .subscribe(patient => {
        this.patient = patient.getPatient;
        // console.log('pppp', this.patient);
        // todo imporove this
        if (this.patient['informations']) {
          this.lastInformation = this.patient['informations'][ this.patient['informations'].length - 1];
        }
        if (this.patient['uploads']) {
          this.bacterologie = []; this.corporels = []; this.virologie = []; this.parasitologie = [];
          this.patient['uploads'].map(image => {
            switch (image.type) {
              case 'bacterologie': this.bacterologie.push(image); break;
              case 'virologie': this.virologie.push(image); break;
              case 'parasitologie': this.parasitologie.push(image); break;
              default: this.corporels.push(image); break;
            }
            });
          }
      });
  }

  getInstructions() {
    this.patientService.getInstructions(this.patientId)
      .subscribe((instruction) => {
        this.instructions = instruction.instructions;
      });
  }

  getCliniques() {
    this.patientService.getCliniques(this.patientId)
      .subscribe((clinique) => {
        this.cliniques = clinique.cliniques;
      });
  }

  ajoutBilanForm() {
    this.bilan = {};
    this.bilan.patientId = this.patientId;
    this.switchbilan = false;
  }

  updateBilan(event) {
    this.bilan = {...event, patientId: this.patientId};
    // this.bilan.date = new Date(event.date);
    // console.log(new Date(event.date).toLocaleString());
    this.switchBilanUp = false;
  }

  ajoutHematologieForm() {
    this.hematologie = {};
    this.hematologie.patientId = this.patientId;
    this.switchHematologie = false;
  }

  updateHematologie(event) {
    this.hematologie = { ...event, patientId: this.patientId };
    this.switchHematologieUp = false;
  }

}
