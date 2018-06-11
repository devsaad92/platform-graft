import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
  currentUser: any;
  jwt: JwtHelper;
  private _isAuthenticated = new BehaviorSubject(false);


  constructor() {
    this.jwt = new JwtHelper();
    this.autoLogin();
  }

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  saveUserData(token: string, refreshToken: string) {
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      this.setUserToken(token);
    }
  }

  getToken(token: string) {
    try {
      const { user, exp } = this.jwt.decodeToken(token);
      if (Date.now() / 1000 > exp) {
        return null;
      }
      return user;
    } catch (e) {
      return null;
    }
  }

  setUserToken(token?: string) {
    const { user } = this.jwt.decodeToken(token);
    this.currentUser = user;

    this._isAuthenticated.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.currentUser = null;

    this._isAuthenticated.next(false);
  }

  autoLogin() {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      this.jwt.decodeToken(token);
      const { exp } = this.jwt.decodeToken(refreshToken);
      if (Date.now() / 1000 > exp) {
        this._isAuthenticated.next(false);
        return false;
      }
    } catch (error) {
      this._isAuthenticated.next(false);
      return false;
    }
    this.setUserToken(token);
  }

}
