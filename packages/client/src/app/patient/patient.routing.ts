import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { Routes } from '@angular/router';
import { PatientsComponent } from './components/patients/patients.component';


export const PatientRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'add-patient',
            component: AddPatientComponent
         },
         {
            path: 'patients',
            component: PatientsComponent
        },
        {
            path: 'patient-item/:id',
            component: PatientItemComponent
        },
        ]
    }
];
