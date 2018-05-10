import { ActivatedRoute } from '@angular/router';
import { PatientService } from './../../services/patient.service';
import { Bilan } from './../../../shared/models/Bilan';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bilan-from',
  templateUrl: './bilan-from.component.html'
})
export class BilanFromComponent implements OnInit {
  @Output() annulerForm = new EventEmitter();
  // @Output() ajouterBilan = new EventEmitter();
  bilan: Bilan = {};
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
  ]

  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  cancelForm() {
    this.annulerForm.emit();
  }

  onSubmit() {
    this.bilan.patientId = +this.route.snapshot.params['id'];
    this.patientService.createBilan(this.bilan)
        .subscribe();
  }


}
