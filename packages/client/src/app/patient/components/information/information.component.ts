import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Information } from './../../../shared/models/Information';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html'
})
export class InformationComponent {
  @Input() informations: Information[];
  @Output() return = new EventEmitter();


  constructor() { }

  retourner() {
    this.return.emit();
  }

}
