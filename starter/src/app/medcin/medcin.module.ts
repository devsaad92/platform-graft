import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TreeModule } from 'angular-tree-component';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

import { AddMedcinComponent } from './add-medcin/add-medcin.component';
import { EditMedcinComponent } from './edit-medcin/edit-medcin.component';
import { MedcinRoutes } from './medcin.routing';
import { MedcinsComponent } from './medcins/medcins.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MedcinRoutes),
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatButtonModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatSelectModule,
        MatPaginatorModule,
        MatTableModule,
        FlexLayoutModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        FileUploadModule,
        TreeModule,
      //  GraphQLModule
    ],
    declarations: [
        MedcinsComponent,
        AddMedcinComponent,
        EditMedcinComponent
    ],
})

export class MedcinModule { }
