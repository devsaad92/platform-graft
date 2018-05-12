import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Upload } from '../../../shared/models/upload';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit, OnChanges {
  @Output() uploadForm = new EventEmitter();
  @Input() uploads: Upload[];
  @Input() index;
  corporels: Upload[];
  bacterologie: Upload[];
  virologie: Upload[];
  parasitologie: Upload[];
  uploads$: Upload[];

  constructor() { }

  ngOnInit() {
  }

  uploadFile() {
    this.uploadForm.emit();
  }

  ngOnChanges() {
    this.uploads$ = [];
    this.bacterologie = [];
    this.virologie = [];
    this.corporels = [];
    this.parasitologie = [];
    if (this.uploads && this.uploads[0]) {
      this.uploads.map(image => {
        if (image.type === 'bacterologie' && this.index === 0) {
          this.bacterologie.push(image);
          this.uploads$ = this.bacterologie;
        } else if (image.type === 'virologie' && this.index === 1) {
          this.virologie.push(image);
          console.log(('viiirrr'));
          this.uploads$ = this.virologie;
        } else if (image.type === 'fluidCorporels' && this.index === 3) {
          this.corporels.push(image);
          this.uploads$ = this.corporels;
        } else {
          this.parasitologie.push(image);
          this.uploads$ = this.parasitologie;
        }
      });
    }
  }

}
