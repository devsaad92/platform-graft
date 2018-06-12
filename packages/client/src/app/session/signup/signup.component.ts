import { Medcin } from './../../shared/models/Medcin';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

import { AuthService } from './../../shared/services/auth.service';
import { MedcinService } from './../../shared/services/medcin.service';

const password1 = new FormControl('', Validators.required);
const confirmPassword1 = new FormControl('', CustomValidators.equalTo(password1));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  public selected: any;

  constructor(private fb: FormBuilder, private medcinService: MedcinService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group( {
      fname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      specialty: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.required],
      password: password1,
      confirmPassword: confirmPassword1
    });
  }

  onSubmit() {
    const {id, fname, lname, email, password, date, gender, specialty} = this.form.value;
    const medcin = new Medcin(id, fname, lname, gender, date, specialty, email, password);
    this.medcinService.createMedcin(medcin)
      .subscribe(user => {
        const token = user.login.token;
        const refreshToken = user.login.refreshToken;
        this.authService.saveUserData(token, refreshToken);

        this.router.navigate(['/']);
      }, (error) => {
        alert(error);
      });
  }
}
