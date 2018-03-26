import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../shared/services/auth.service';
import { MedcinService } from './../../shared/services/medcin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  invalidLogin: boolean;
  public form: FormGroup;


  constructor(private fb: FormBuilder, private medcinService: MedcinService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    this.singin();

  }

  singin() {
    this.medcinService.login(this.form.value)
      .subscribe((user) => {
        const token = user.login.token;
        this.authService.saveUserData(token);

        this.router.navigate(['/']);

      }, (error) => {
        this.invalidLogin = true;
        // alert(error);
      });
  }

}
