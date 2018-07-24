import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

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

  @ViewChild(DatatableComponent) table: DatatableComponent;

  temp = [];


  constructor(private patientService: PatientService, private authService: AuthService) { }

  ngOnInit() {
    this.getAllPatients();
    this.admin = this.authService.currentUser.roleId;
  }

  getAllPatients() {
    this.patientService.getAll()
      .subscribe(patients => {
        this.allPatients = patients.allPatients;
        this.allPatients.map(patient => {
          if (patient.dateDeGreffe === null) {
            this.waitPation.push(patient);
          } else {
            this.greffedPations.push(patient);
          }
        });
        this.dataSource = this.allPatients;
        this.temp = [...this.allPatients];
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
    this.patientService.deletePatient(value).subscribe();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(d => {
      return d.firstName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.dataSource = temp;
    this.table.offset = 0;
  }
}
