import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Bilan } from './../../../shared/models/Bilan';

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

  results = [
    {
      name: 'Zimbabwe',
      series: [
        {
          value: 4490,
          name: '2016-09-17T10:13:57.322Z'
        },
        {
          value: 5135,
          name: '2016-09-20T14:51:22.785Z'
        },
        {
          value: 5654,
          name: '2016-09-16T03:17:13.568Z'
        },
        {
          value: 6638,
          name: '2016-09-15T05:44:11.752Z'
        },
        {
          value: 5093,
          name: '2016-09-15T06:42:40.683Z'
        }
      ]
    },
    {
      name: 'Saint Vincent and The Grenadines',
      series: [
        {
          value: 3305,
          name: '2016-09-17T10:13:57.322Z'
        },
        {
          value: 5321,
          name: '2016-09-20T14:51:22.785Z'
        },
        {
          value: 3622,
          name: '2016-09-16T03:17:13.568Z'
        },
        {
          value: 6832,
          name: '2016-09-15T05:44:11.752Z'
        },
        {
          value: 3916,
          name: '2016-09-15T06:42:40.683Z'
        }
      ]
    },
    {
      name: 'Uganda',
      series: [
        {
          value: 6848,
          name: '2016-09-17T10:13:57.322Z'
        },
        {
          value: 2574,
          name: '2016-09-20T14:51:22.785Z'
        },
        {
          value: 3456,
          name: '2016-09-16T03:17:13.568Z'
        },
        {
          value: 5944,
          name: '2016-09-15T05:44:11.752Z'
        },
        {
          value: 2831,
          name: '2016-09-15T06:42:40.683Z'
        }
      ]
    },
    {
      name: 'India',
      series: [
        {
          value: 3136,
          name: '2016-09-17T10:13:57.322Z'
        },
        {
          value: 5107,
          name: '2016-09-20T14:51:22.785Z'
        },
        {
          value: 4263,
          name: '2016-09-16T03:17:13.568Z'
        },
        {
          value: 3474,
          name: '2016-09-15T05:44:11.752Z'
        },
        {
          value: 5394,
          name: '2016-09-15T06:42:40.683Z'
        }
      ]
    },
    {
      name: 'Peru',
      series: [
        {
          value: 6196,
          name: '2016-09-17T10:13:57.322Z'
        },
        {
          value: 5695,
          name: '2016-09-20T14:51:22.785Z'
        },
        {
          value: 5212,
          name: '2016-09-16T03:17:13.568Z'
        },
        {
          value: 6516,
          name: '2016-09-15T05:44:11.752Z'
        },
        {
          value: 4971,
          name: '2016-09-15T06:42:40.683Z'
        }
      ]
    }
  ];
  result: [{}];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.bilans);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.bilans);
    if (!this.bilans) {
      return null;
    }
    const series: [{}] = [{value: 11, name: 'jj'}];
    const result: [{}] = [{name: 'oooo', series: [{}]}];
    for (const i in this.bilans) {
      if (i) {
        const soduim = { value: this.bilans[i].soduim, name: this.bilans[i].date };
        series[i] = soduim ;
      }
    }

    const sss = { name: 'Soduim', series };
    result[0] = sss;
    this.result = result;
  }

  ajouterBilan() {
    this.ajoutBilanForm.emit();
  }

  onSelect() {
    console.log(`hhhhh ${event}`);
  }
}
