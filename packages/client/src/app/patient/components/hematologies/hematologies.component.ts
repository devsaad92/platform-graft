import { Hematologie } from './../../../shared/models/hematologie';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hematologies',
  templateUrl: './hematologies.component.html',
  styleUrls: ['./hematologies.component.scss']
})
export class HematologiesComponent implements OnInit, OnChanges {
  @Input() hematologies: Hematologie[];
  @Output() ajoutHematologieForm = new EventEmitter();
  @Output() updateHematologie = new EventEmitter();

  columns = [];

  selected = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
   this.customerTable();
  }

  customerTable() {
    if (this.hematologies && this.hematologies[0]) {
      const keys = Object.keys(this.hematologies[0]);
      this.columns = [];
      for (const i of keys) {
        if (i !== 'id' && i !== '__typename' && i !== 'date') {
          this.columns.push({ prop: i });
        }
      }
    }
  }

  ajouterHematologie() {
    this.ajoutHematologieForm.emit();
  }

  onSelectRow({ selected }) {
    this.updateHematologie.emit(this.selected[0]);
  }
}

