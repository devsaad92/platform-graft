import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { PatientRoutes } from './patient.routing';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChatComponent } from './components/chat/chat.component';
import { BilansComponent } from './components/bilans/bilans.component';

@NgModule({
  imports: [
    RouterModule.forChild(PatientRoutes),
    SharedModule,
    MatGridListModule
  ],
  declarations: [
    AddPatientComponent,
    PatientsComponent,
    PatientItemComponent,
    ChatComponent,
    BilansComponent
  ]
})
export class PatientModule { }
