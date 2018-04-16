import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

import { MedcinService } from './../../shared/services/medcin.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private medcinService: MedcinService, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      email: [ null, Validators.compose( [ Validators.required, CustomValidators.email ] ) ]
    } );
  }

  onSubmit() {
    this.medcinService.forgetPassword(this.form.value.email)
      .subscribe(() => {
        this.router.navigate( ['/session/signin'] );
      }, (error) => {
        alert(error);
      });
  }

}
