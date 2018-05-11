import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Upload } from '../../../shared/models/upload';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit, OnChanges {
  @Input() uploads: Upload[];
  @Input() index;
  // corporels: Upload[] = [];
  // bacterologie: Upload[] = [];
  // virologie: Upload[] = [];
  // parasitologie: Upload[] = [];
  @Output() uploadForm = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  uploadFile() {
    this.uploadForm.emit();
  }

  ngOnChanges() {
    const  corporels: Upload[] = [];
    const bacterologie: Upload[] = [];
    const virologie: Upload[] = [];
    const parasitologie: Upload[] = [];
    if (this.uploads && this.uploads[0]) {
      this.uploads.map(image => {
        if (image.type === 'bacterologie') {
          bacterologie.push(image);
        } else if (image.type === 'virologie') {
          virologie.push(image);
        } else if (image.type === 'fluidCorporels') {
          corporels.push(image);
        } else {
          parasitologie.push(image);
        }
      });
    }
    if (this.index === 0) {
      this.uploads = bacterologie;
    } else if (this.index === 1) {
      this.uploads = virologie;
    } else if (this.index === 2) {
      this.uploads = parasitologie;
    } else {
      this.uploads = corporels;
    }
  }

  changeFile() {
    // if (this.index === 0) {
    //   this.uploads = this.bacterologie;
    // } else if (this.index === 1) {
    //   this.uploads = this.virologie;
    // } else if (this.index === 2) {
    //   this.uploads = this.parasitologie;
    // } else {
    //   this.uploads = this.corporels;
    // }
  }
}
