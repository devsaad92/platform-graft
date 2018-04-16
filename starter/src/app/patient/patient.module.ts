import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { PatientRoutes } from './patient.routing';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientItemComponent } from './components/patient-item/patient-item.component';

@NgModule({
  imports: [
    RouterModule.forChild(PatientRoutes),
    SharedModule,
  ],
  declarations: [
    AddPatientComponent,
    PatientsComponent,
    PatientItemComponent
  ]
})
export class PatientModule { }
