import { PatientService } from './../../services/patient.service';
import { Upload } from './../../../shared/models/upload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  upload: Upload = {};

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.upload.file = event.target.files[0];
    this.upload.patientId = 1;
  }

  onUpload() {
    // const fd = new FormData();
    // fd.append('image', this.upload.file, this.upload.file.name);
    this.patientService.uploadFile(this.upload)
     .subscribe(() => console.log('OK'));
    // console.log(this.upload);
  }
}
