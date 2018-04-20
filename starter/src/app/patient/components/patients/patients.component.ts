import { PatientService } from './../../services/patient.service';
import { Patient } from './../../../shared/models/Patient';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  allPatients: Patient[] = [];
  loading: Boolean ;
  displayedColumns = ['id', 'firstName', 'dateDeNaissance', 'sexe', 'dateDeGreffe', 'postGreffe', 'action'];
  dataSource: any;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.getAll()
      .subscribe(patients => {
        this.allPatients = patients.allPatients;
        this.dataSource = new MatTableDataSource(this.allPatients);
      });
  }

}
