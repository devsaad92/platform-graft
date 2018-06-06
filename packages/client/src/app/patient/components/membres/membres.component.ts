import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.scss']
})
export class MembresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addPatientMember() {
    console.log('12345');
  }
}
