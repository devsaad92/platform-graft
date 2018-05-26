import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Upload } from '../../../shared/models/upload';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent {
  @Output() uploadForm = new EventEmitter();
  @Input() uploads: Upload[];
  @Input() index = 0;

  constructor() { }

  uploadFile() {
    this.uploadForm.emit();
  }
}
