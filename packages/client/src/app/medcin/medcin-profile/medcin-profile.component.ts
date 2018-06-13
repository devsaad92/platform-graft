import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Medcin } from './../../shared/models/Medcin';
import { Patient } from './../../shared/models/Patient';
import { MedcinService } from './../../shared/services/medcin.service';

@Component({
  selector: 'app-medcin-profile',
  templateUrl: './medcin-profile.component.html',
  styleUrls: ['./medcin-profile.component.scss']
})
export class MedcinProfileComponent implements OnInit {
  medcin: Medcin = {};
  id: number;
  switch = true;
  patients: Patient[];

  constructor(private medcinService: MedcinService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMedcin();
  }

  getMedcin() {
    this.id = this.route.snapshot.params['id'];
    this.medcinService.getOne(this.id)
      .subscribe(medcin => {
        this.medcin = medcin.medcinQuery;
        this.patients = this.medcin['patients'];
      });
  }


  updateMedcin() {
    this.switch = false;
  }

}
