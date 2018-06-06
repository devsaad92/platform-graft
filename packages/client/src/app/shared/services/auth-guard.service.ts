import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.authService.isAuthenticated.map((authState) => {
      if (authState) {
        console.log('vous ets connecte');
        return true;
      }

      this.router.navigate(['/session/signin']);
      console.log('vous nets pas connecte');
      return false;
    });
  }
}
