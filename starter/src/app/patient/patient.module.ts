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
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { BilanFromComponent } from './components/bilan-from/bilan-from.component';
import { InformationComponent } from './components/information/information.component';
import { InformationFormComponent } from './components/information-form/information-form.component';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadsComponent } from './components/uploads/uploads.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    RouterModule.forChild(PatientRoutes),
    SharedModule,
    MatGridListModule,
    ChartsModule,
    NgxDatatableModule,

    NgxChartsModule
  ],
  declarations: [
    AddPatientComponent,
    PatientsComponent,
    PatientItemComponent,
    ChatComponent,
    BilansComponent,
    PatientCardComponent,
    EditPatientComponent,
    BilanFromComponent,
    InformationComponent,
    InformationFormComponent,
    UploadFormComponent,
    UploadsComponent
  ]
})
export class PatientModule { }
