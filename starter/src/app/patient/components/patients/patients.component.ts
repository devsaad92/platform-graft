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
  greffedPations: Patient[] = [] ;
  waitPation: Patient[] = [] ;
  Currentpations: any;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.getAll()
      .subscribe(patients => {
        this.allPatients = patients.allPatients;
        this.allPatients.map(pation => {
          if (pation.dateDeGreffe === null) {
            this.waitPation.push(pation);
          } else {
            this.greffedPations.push(pation);
          }
        });
        console.log(this.waitPation);
        console.log(this.greffedPations);

        this.dataSource = new MatTableDataSource(this.allPatients);
      });
  }

  pationViewManager(filter: any) {
    // this will manage witch pation will be dispalyer "allpation or waited pation or greffed pation"
    console.log('filterd : ', filter);
    if ( filter ===  1) {
      this.dataSource = new MatTableDataSource(this.allPatients);
    } else if ( filter === 3 ) {
      this.dataSource = new MatTableDataSource(this.greffedPations);
    } else {
      this.dataSource = new MatTableDataSource(this.waitPation);
    }
  }
}
