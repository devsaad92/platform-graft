import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Bilan } from './../../../shared/models/Bilan';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-bilan-from',
  templateUrl: './bilan-from.component.html'
})
export class BilanFromComponent implements OnInit {
  @Output() annulerForm = new EventEmitter();
  @Output() submitSuccess = new EventEmitter();
  @Input() bilan: Bilan;
  bilanFeilds = [
        'soduim',
         'potassuim',
         'chlore',
         'uree',
         'creatinine',
         'calcuim',
         'calcuimCorrige',
         'phosphore',
         'magnesuim',
         'glucose',
         'albumine',
         'bilirubineT',
         'bilirubineD',
         'phosphataseAlcaline',
         'sgot',
         'sgpt',
         'ggt',
         'ldh',
         'triglyceride',
         'cholesterole',
         'ammonemie',
         'lactate',
         'amylase',
         'lipase',
         'crp',
  ];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  cancelForm() {
    this.annulerForm.emit();
  }

  onSubmit() {
    if (!this.bilan.id) {
      this.patientService.createBilan(this.bilan)
        .subscribe(() => this.submitSuccess.emit());
    }

    if (this.bilan.id) {
      this.patientService.updateBilan(this.bilan)
        .subscribe(() => this.submitSuccess.emit());
    }

  }


}
