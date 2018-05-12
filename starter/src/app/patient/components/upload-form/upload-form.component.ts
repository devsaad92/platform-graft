import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from './../../services/patient.service';
import { Upload } from './../../../shared/models/upload';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  upload: Upload = {};
  @Output() annulerUploadForm = new EventEmitter();
  @Output() submitSuccess = new EventEmitter();

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.upload.patientId = +this.route.snapshot.params['id'];
  }

  onFileSelected(event) {
    this.upload.file = event.target.files[0];
  }

  onUpload() {
    this.patientService.uploadFile(this.upload)
     .subscribe(() => this.submitSuccess.emit());
  }

  cancelForm() {
    this.annulerUploadForm.emit();
  }
}
