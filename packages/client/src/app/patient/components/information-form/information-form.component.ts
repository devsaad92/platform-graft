import { ActivatedRoute } from '@angular/router';
import { PatientService } from './../../services/patient.service';
import { Information } from './../../../shared/models/Information';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html'
})
export class InformationFormComponent implements OnInit {
  @Output() annulerInformationForm = new EventEmitter();
  @Output() submitSuccess = new EventEmitter();
  information: Information = {};

  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onSubmit() {
    this.information.patientId = +this.route.snapshot.params['id'];

    this.patientService.createInformation(this.information)
      .subscribe(() => this.submitSuccess.emit());
  }

  cancelForm() {
    this.annulerInformationForm.emit();
  }
}
