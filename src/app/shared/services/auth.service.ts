import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private headers: Headers;
  public helper;

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    this.helper = new JwtHelperService();
  }

  login(email: string, password: string) {
    return this.http.post(environment.authUrl + '/login', { email: email, password: password });
  }

  storeUserData(authResult: any) {
    localStorage.setItem('expires_at', authResult.expiresAt);
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('user', JSON.stringify({ name: authResult.user.name, email: authResult.user.email }));
  }

  getSession() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isUserLoggedIn() {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    return !this.jwtHelperService.isTokenExpired(token);
  }

  logout() {
    localStorage.clear();
    location.pathname = '/signin';
  }
}
