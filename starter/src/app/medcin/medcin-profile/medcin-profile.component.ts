import { Medcin } from './../../shared/models/Medcin';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medcin-profile',
  templateUrl: './medcin-profile.component.html',
  styleUrls: ['./medcin-profile.component.scss']
})
export class MedcinProfileComponent implements OnInit {
  public form: FormGroup;
  medcin: Medcin = {};

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      specialty: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.required]
    });
  }

}
