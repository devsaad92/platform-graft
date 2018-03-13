import { Routes } from '@angular/router';

import { AddMedcinComponent } from './add-medcin/add-medcin.component';
import { MedcinsComponent } from './medcins/medcins.component';
import { EditMedcinComponent } from './edit-medcin/edit-medcin.component';

export const MedcinRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'medcins',
            component: MedcinsComponent
        }, {
            path: 'addMedcin',
            component: AddMedcinComponent
        },
        {
            path: 'editMedcin/:id',
            component: EditMedcinComponent
        }
      ]
    }
];
