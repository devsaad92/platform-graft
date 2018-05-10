import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Bilan } from './../../../shared/models/Bilan';
import { OBJECT } from 'graphql/language/kinds';

@Component({
  selector: 'app-bilans',
  templateUrl: './bilans.component.html',
  styleUrls: ['./bilans.component.scss']
})
export class BilansComponent implements OnInit, OnChanges {
  @Input() bilans: Bilan[];
  @Output() ajoutBilanForm = new EventEmitter();
  displayedColumns = ['date', 'soduim', 'crp', 'magnesuim', 'glucose', 'ggt', 'potassuim'];
  dataSource: any;

  // ngx-chart
  view: any[] = [600, 400];

  colorScheme = {
    domain: ['#3f51b5', '#2ecc71', '#3498db', '#16a085', '#95a5a6']
  };
  done = false
  columns = [
  ];

  r = []

  result: [{}];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.bilans);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.bilans);
    this.viewCourbe();
    // this needs optimisation
    this.done = false
    if(this.bilans.length > 0 ) { 
      const keys = Object.keys(this.bilans[0])
      this.r = []
      
      this.r =  this.bilans
      this.columns = []
      for (let i of keys) {
        if (i != 'id' && i !='__typename' && i != 'date'  ) { 
          this.columns.push({ prop : i})

          
        }
      }
      this.done = true
    }
  }

  getTime(dateString) {
    return new Date(dateString).getHours();
  }

  ajouterBilan() {
    this.ajoutBilanForm.emit();
  }

  onSelect(event) {
    console.log(`hhhhh ${event}`);
  }

  private viewCourbe() {
    if (!this.bilans) {
      return null;
    }
    const result: [{}] = [{}]; // [{ name: '', series: [{}] }]
    const soduims: [{}] = [{}]; // [{value: 0, name: ''}];
    const crps: [{}] = [{}];

    for (const i in this.bilans) {
      if (this.bilans[i]) {
        if (this.bilans[i].soduim) {
          const soduim = { value: this.bilans[i].soduim, name: this.bilans[i].date };
          soduims[i] = soduim;
        }
        if (this.bilans[i].crp) {
          const crp = { value: this.bilans[i].crp, name: this.bilans[i].date };
          crps[i] = crp;
        }
      }
    }

    if (soduims.length >= 1 && soduims[0]['name']) {
      result[0] = { name: 'Soduim', series: soduims };
    }
    if (crps.length >= 1 && soduims[0]['name']) {
      result[1] = { name: 'Crp', series: crps };
    }

    if (result.length >= 1 && result[0]['name']) {
      this.result = result;
    }
  }
}
