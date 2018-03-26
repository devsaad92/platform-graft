import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';

import * as screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleNotificationSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService, private router: Router) {
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/session/signin']);
  }

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

}
