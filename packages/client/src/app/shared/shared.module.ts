import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@NgModule({
 exports: [
   CommonModule,
   FlexLayoutModule,
   FormsModule,
   ReactiveFormsModule,
  //  Angular Material Compns
   MatSidenavModule,
   MatCardModule,
   MatMenuModule,
   MatCheckboxModule,
   MatTabsModule,
   MatListModule,
   MatSlideToggleModule,
   MatIconModule,
   MatInputModule,
   MatRadioModule,
   MatButtonModule,
   MatProgressBarModule,
   MatToolbarModule,
   MatSelectModule,
   MatPaginatorModule,
   MatTableModule,
   MatDatepickerModule,
   MatNativeDateModule,
   OwlDateTimeModule, OwlNativeDateTimeModule
 ]
})
export class SharedModule { }
