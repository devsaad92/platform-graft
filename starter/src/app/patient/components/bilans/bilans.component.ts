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
  @Output() updateBilanForm = new EventEmitter();

  // ngx-chart
  view: any[] = [800, 400];

  colorScheme = {
    domain: ['#3f51b5', '#2ecc71', '#3498db', '#16a085', '#95a5a6', '#2d3436']
  };

  results: BilanShapeResult[];
  done = false;
  columns = [];
  r = [];

  selected = [];

  constructor() { }

  ngOnInit() {
    this.viewCourbe();
  }

  ngOnChanges() {
    this.viewCourbe();
    // this needs optimisation
    this.done = false;
    if (this.bilans && this.bilans[0]) {
      const keys = Object.keys(this.bilans[0]);
      this.r = [];

      this.r = this.bilans;
      this.columns = [];
      for (const i of keys) {
        if (i !== 'id' && i !== '__typename' && i !== 'date'  ) {
          this.columns.push({ prop : i});
        }
      }
      this.done = true;
    }
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
    const magnesuims: BilanShape[] = [];
    const ggts: BilanShape[] = [];
    const potassuims: BilanShape[] = [];
    const urees: BilanShape[] = [];
    const calcuims: BilanShape[] = [];

    this.bilans.forEach(bilan => {
      if (bilan.soduim) {
        soduims.push(new BilanShape(bilan.soduim, bilan.date));
      }
      if (bilan.crp) {
        crps.push(new BilanShape(bilan.crp, bilan.date));
      }
      if (bilan.glucose) {
        glucoses.push(new BilanShape(bilan.glucose, bilan.date));
      }
      if (bilan.magnesuim) {
        magnesuims.push(new BilanShape(bilan.magnesuim, bilan.date));
      }
      if (bilan.ggt) {
        ggts.push(new BilanShape(bilan.ggt, bilan.date));
      }
      if (bilan.potassuim) {
        potassuims.push(new BilanShape(bilan.potassuim, bilan.date));
      }
      if (bilan.uree) {
        urees.push(new BilanShape(bilan.uree, bilan.date));
      }
      if (bilan.calcuim) {
        calcuims.push(new BilanShape(bilan.calcuim, bilan.date));
      }
    });

    if (soduims.length >= 1 && soduims[0].name) {
        results.push(new BilanShapeResult('Soduim', soduims));
    }
    if (crps.length >= 1 && crps[0].name) {
        results.push(new BilanShapeResult('Crp', crps));
    }
    if (glucoses.length >= 1 && glucoses[0].name) {
       results.push(new BilanShapeResult('Glucose', glucoses));
    }
    if (magnesuims.length >= 1 && magnesuims[0].name) {
      results.push(new BilanShapeResult('Magnesuim', magnesuims));
    }
    if (ggts.length >= 1 && ggts[0].name) {
      results.push(new BilanShapeResult('GGT', ggts));
    }
    if (potassuims.length >= 1 && potassuims[0].name) {
      results.push(new BilanShapeResult('Potassuim', potassuims));
    }
    if (urees.length >= 1 && urees[0].name) {
      results.push(new BilanShapeResult('Uree', urees));
    }
    if (calcuims.length >= 1 && calcuims[0].name) {
      results.push(new BilanShapeResult('Calcuim', calcuims));
    }

    if (results.length >= 1 && results[0].name) {
       this.results = results;
    }
  }

   onSelectRow({ selected }) {
    // console.log('Select Event', this.selected[0]);
    this.updateBilanForm.emit(this.selected[0]);
  }
}

class BilanShape {
  constructor (public value: String, public name: Date) {}
}

class BilanShapeResult {
  constructor(public name: String, public series: BilanShape[]) { }
}
