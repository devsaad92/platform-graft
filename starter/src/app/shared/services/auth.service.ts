import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GC_AUTH_TOKEN } from '../constants';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
  currentUser: any;
  private _isAuthenticated = new BehaviorSubject(false);


  constructor() {
    this.autoLogin();
  }

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  saveUserData(token: string) {
    if (token) {
      localStorage.setItem(GC_AUTH_TOKEN, token);
      this.setUserToken(token);
    }
  }


  setUserToken(token: string) {
    const jwt = new JwtHelper();
    this.currentUser = jwt.decodeToken(token);

    this._isAuthenticated.next(true);
  }

  logout() {
    localStorage.removeItem(GC_AUTH_TOKEN);
    this.currentUser = null;

    this._isAuthenticated.next(false);
  }

  loggedIn() {
    return tokenNotExpired();
  }

  autoLogin() {
    const token = localStorage.getItem(GC_AUTH_TOKEN);

    if (token) {
      this.setUserToken(token);
    }
  }

}
