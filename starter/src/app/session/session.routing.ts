import { Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResetComponent } from './reset/reset.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const SessionRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '404',
      component: NotFoundComponent
    }, {
      path: 'error',
      component: ErrorComponent
    }, {
      path: 'forgot',
      component: ForgotComponent
    }, {
      path: 'lockscreen',
      component: LockscreenComponent
    }, {
      path: 'signin',
      component: SigninComponent
    }, {
      path: 'signup',
      component: SignupComponent
      }, {
        path: 'reset/:token',
        component: ResetComponent,
        // canActivate: [ResetGuardService],
      }]
  }
];
