import { Medcin } from './../../../shared/models/Medcin';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html'
})
export class MembresComponent implements OnChanges {
  @Input() medcins: Medcin[];
  @Input() members: Medcin[];

  constructor() { }

  ngOnChanges() {
    console.log(this.medcins);
    console.log(this.members);
  }

  addPatientMember() {
    console.log('12345');
  }
}
