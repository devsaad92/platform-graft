import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Bilan } from './../../../shared/models/Bilan';

@Component({
  selector: 'app-bilans',
  templateUrl: './bilans.component.html',
  styleUrls: ['./bilans.component.scss']
})
export class BilansComponent implements OnInit, OnChanges {
  @Input()
  bilans: Bilan[];
  @Output() ajoutBilanForm = new EventEmitter();
  displayedColumns = ['date', 'soduim', 'crp', 'magnesuim', 'glucose', 'ggt', 'potassuim'];
  dataSource: any;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.bilans);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.bilans);
  }

  ajouterBilan() {
    this.ajoutBilanForm.emit();
  }
}
