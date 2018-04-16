import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TreeModule } from 'angular-tree-component';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

import { SharedModule } from '../shared/shared.module';
import { AddMedcinComponent } from './add-medcin/add-medcin.component';
import { EditMedcinComponent } from './edit-medcin/edit-medcin.component';
import { MedcinProfileComponent } from './medcin-profile/medcin-profile.component';
import { MedcinRoutes } from './medcin.routing';
import { MedcinsComponent } from './medcins/medcins.component';


@NgModule({
    imports: [
        RouterModule.forChild(MedcinRoutes),
        SharedModule,
        NgxDatatableModule,
        FileUploadModule,
        TreeModule,
      //  GraphQLModule
    ],
    declarations: [
        MedcinsComponent,
        AddMedcinComponent,
        EditMedcinComponent,
        MedcinProfileComponent
    ],
})

export class MedcinModule { }
