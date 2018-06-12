import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes),
    SharedModule
  ],
  declarations: [ DashboardComponent ]
})

export class DashboardModule {}
