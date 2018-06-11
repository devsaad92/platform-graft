import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Upload } from '../../../shared/models/upload';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent {
  public url = environment.baseURL;
  @Output() uploadForm = new EventEmitter();
  @Input() uploads: Upload[];
  @Input() index = 0;

  constructor() { }

  uploadFile() {
    this.uploadForm.emit();
  }
}
