import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ResetGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    const tokenReset = localStorage.getItem('RESET-TOKEN');
    const tokenValid = this.auth.getToken(tokenReset);
    if (tokenValid) {
      return true;
    } else {
      this.router.navigate(['/session/error']);
      return false;
    }
  }
}
