import { AuthGuardService } from './shared/services/auth-guard.service';
import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  canActivate: [AuthGuardService],
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
      path: 'medcin',
      loadChildren: './medcin/medcin.module#MedcinModule'
    }]
},  {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'session',
    loadChildren: './session/session.module#SessionModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];
