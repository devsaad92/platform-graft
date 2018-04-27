import { MatTableDataSource } from '@angular/material';
import { Information } from './../../../shared/models/Information';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html'
})
export class InformationComponent implements OnInit {
  @Input()
  informations: Information[];
  @Output() return = new EventEmitter();
  displayedColumns = ['date', 'Temp', 'FC', 'FR', 'PA', 'SaO2'];
  dataSource: any;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.informations);
  }

  retourner() {
    this.return.emit();
  }

}
