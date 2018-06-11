import { MedcinService } from './../../shared/services/medcin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { CustomValidators } from 'ng2-validation';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  public form: FormGroup;
  userEmail: string;

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private medcinService: MedcinService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      password: password,
      confirmPassword: confirmPassword
    });

    const tokenReset = this.route.snapshot.params['token'];
    localStorage.setItem('RESET-TOKEN', tokenReset);
    const user = this.authService.getToken(tokenReset);
    if (!user) { return null; }
    this.userEmail = user.email;

  }

  onSubmit() {
    if (!this.userEmail) {
      return ;
    }
    this.medcinService.resetPassword(this.userEmail, this.form.value.password)
      .subscribe(() => {
        this.router.navigate( ['/session/signin'] );
      }, (error) => {
       // alert(error);
      });
  }

}
