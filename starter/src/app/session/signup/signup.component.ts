import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

import { AuthService } from './../../shared/services/auth.service';
import { MedcinService } from './../../shared/services/medcin.service';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private medcinService: MedcinService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group( {
      fname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      specialty: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.required],
      password: password,
      confirmPassword: confirmPassword
    } );
  }

  onSubmit() {
    this.medcinService.createMedcin(this.form.value)
      .subscribe((user) => {
        const token = user.login.token;
        this.authService.saveUserData(token);
        this.router.navigate(['/']);
      }, (error) => {
        alert(error);
      });
  }
}
