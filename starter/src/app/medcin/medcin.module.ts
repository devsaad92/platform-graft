import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { TreeModule } from 'angular-tree-component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GraphQLModule } from '../apollo.config';

import { MedcinRoutes } from './medcin.routing';
import { AddMedcinComponent } from './add-medcin/add-medcin.component';
// import { MedcinItemComponent } from './medcin-item/medcin-item.component';
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
        GraphQLModule
    ],
    declarations: [
        MedcinsComponent,
        AddMedcinComponent
    ],
})

export class MedcinModule { }
