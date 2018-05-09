import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Upload } from '../../../shared/models/upload';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit {
  @Input() uploads: Upload[];
  @Output() uploadForm = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  uploadFile() {
    this.uploadForm.emit();
  }

}
