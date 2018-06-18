import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Bilan } from './../../../shared/models/Bilan';
import { CourbeService } from './../../services/courbe.service';

@Component({
  selector: 'app-bilans',
  templateUrl: './bilans.component.html',
  styleUrls: ['./bilans.component.scss'],
  providers: [CourbeService]
})
export class BilansComponent implements OnChanges {
  @Input() bilans: Bilan[];
  @Output() ajoutBilanForm = new EventEmitter();
  @Output() updateBilanForm = new EventEmitter();

  // ngx-chart
  view: any[] = [900, 350];

  colorScheme = {
    domain: ['#3f51b5', '#2ecc71', '#3498db', '#16a085', '#95a5a6', '#2d3436']
  };

  results = [];
  done = false;
  columns = [];
  r = [];
  selected = [];

  constructor(private courbeService: CourbeService) {}

  ngOnChanges() {
    this.showChart();

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

  private showChart() {
    this.courbeService.addItem(this.bilans);
    this.results = this.courbeService.getAll();
  }

  onSelectRow() {
    this.updateBilanForm.emit(this.selected[0]);
  }
}

