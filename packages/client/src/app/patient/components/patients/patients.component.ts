import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Patient } from './../../../shared/models/Patient';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  allPatients: Patient[] = [];
  loading: Boolean ;
  dataSource: Patient[];
  greffedPations: Patient[] = [] ;
  waitPation: Patient[] = [] ;
  Currentpations: any;
  admin = 0;


  constructor(private patientService: PatientService, private authService: AuthService) { }

  ngOnInit() {
    this.getAllPatients();
    this.admin = this.authService.currentUser.roleId;
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
        this.dataSource = this.allPatients;
      });
  }

  pationViewManager(filter: any) {
    // this will manage witch patient will be dispalyed "all patients or waited patients or greffed patients"
    if ( filter ===  1) {
      this.dataSource = this.allPatients;
    } else if ( filter === 3 ) {
      this.dataSource = this.greffedPations;
    } else {
      this.dataSource = this.waitPation;
    }
  }

  deleteP(value) {
    console.log(value);
  }
}
