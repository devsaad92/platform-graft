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

  // chart
  pieChartColors: any[] = [{
    backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
  }];

  pieOptions: any = {
    responsive: true,
    legend: {
      position: 'right'
    }
  };

  pieChartLabels: string[] = ['MS Word', 'Typing', 'Sage Pastel'];
  pieChartData: number[] = [300, 500, 100];
  pieChartType = 'pie';


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
