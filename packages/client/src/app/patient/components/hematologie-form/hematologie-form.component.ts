import { Hematologie } from './../../../shared/models/hematologie';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hematologie-form',
  templateUrl: './hematologie-form.component.html'
})
export class HematologieFormComponent implements OnInit {
  @Output() annulerForm = new EventEmitter();
  @Output() submitSuccess = new EventEmitter();
  @Input() hematologie: Hematologie;
  hematologieFeilds = [
      'gb',
      'lymphocyte',
      'monocytes',
      'neutrophiles',
      'eosinophiles',
      'gr',
      'hb',
      'ht',
      'plaquette',
      'vgm',
      'ccmh',
      'retic',
      'tp',
      'tca',
      'inr',
      'fibrinogene',
      'facteurV',
      'antiTIII',
      'facteurXa',
      'dDimeres'
  ];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  cancelForm() {
    this.annulerForm.emit();
  }

  onSubmit() {
    if (!this.hematologie.id) {
      this.patientService.createHematologie(this.hematologie)
        .subscribe(() => this.submitSuccess.emit());
    }

    if (this.hematologie.id) {
      this.patientService.updateHematologie(this.hematologie)
        .subscribe(() => this.submitSuccess.emit());
    }

  }

}
