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
  view: any[] = [800, 400];

  colorScheme = {
    domain: ['#3f51b5', '#2ecc71', '#3498db', '#16a085', '#95a5a6']
  };

  results: BilanShapeResult[];
  done = false;
  columns = [
  ];

  r = [];

  result: [{}];
  selected = [];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.bilans);
    this.viewCourbe();
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.bilans);
    this.viewCourbe();
    // this needs optimisation
    this.done = false;
    if (this.bilans.length > 0 ) {
      const keys = Object.keys(this.bilans[0]);
      this.r = [];

      this.r =  this.bilans;
      this.columns = [];
      for (const i of keys) {
        if (i !== 'id' && i !== '__typename' && i !== 'date'  ) {
          this.columns.push({ prop : i});
        }
      }
      this.done = true;
    }
  }

  getTime(dateString) {
    return new Date(dateString).getHours();
  }

  ajouterBilan() {
    this.ajoutBilanForm.emit();
  }

  onSelect(event) {
    switch (event) {
      case 'Soduim':
        this.results.splice(0, 1);
        break;
      case 'Crp':
        this.results.splice(1, 1);
        break;
      default:
        break;
    }
  }

  private viewCourbe() {
    if (!this.bilans) {
      return null;
    }
    const results: BilanShapeResult[] = [];
    const soduims: BilanShape[] = [];
    const crps: BilanShape[] = [];
    const glucoses: BilanShape[] = [];

    for (const i in this.bilans) {
      if (this.bilans[i]) {
        if (this.bilans[i].soduim) {
          soduims.push(new BilanShape(this.bilans[i].soduim, this.bilans[i].date));
        }
        if (this.bilans[i].crp) {
          crps.push(new BilanShape(this.bilans[i].crp, this.bilans[i].date));
        }
        if (this.bilans[i].glucose) {
          glucoses.push(new BilanShape(this.bilans[i].glucose, this.bilans[i].date));
        }
      }
    }

    if (soduims.length >= 1 && soduims[0].name) {
        results.push(new BilanShapeResult('Soduim', soduims));
    }
    if (crps.length >= 1 && crps[0].name) {
        results.push(new BilanShapeResult('Crp', crps));
    }
    if (glucoses.length >= 1 && glucoses[0].name) {
       results.push(new BilanShapeResult('Glucose', glucoses));
    }

    if (results.length >= 1 && results[0].name) {
       this.results = results;
    }
  }

   onSelectRow({ selected }) {
    console.log('Select Event', this.selected[0]);
  }
}

class BilanShape {
  constructor (public value: String, public name: String) {}
}

class BilanShapeResult {
  constructor(public name: String, public series: BilanShape[]) { }
}
