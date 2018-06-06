import { MatTableDataSource } from '@angular/material';
import { Traitement } from './../../../shared/models/Traitement';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-traitements',
  templateUrl: './traitements.component.html',
  styleUrls: ['./traitements.component.scss']
})
export class TraitementsComponent implements OnInit {
  @Input() traitements: Traitement[];
  displayedColumns = ['date', 'text'];
  dataSource: any;
  traitement: Traitement = {};


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.traitements);
  }

  addPatientTraitement() {
    console.log(this.traitement);
    this.traitement = {};
  }
}
