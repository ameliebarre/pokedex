import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import * as moment from 'moment';
import {Observable} from 'rxjs';
import { tap, map } from 'rxjs/operators';

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

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(environment.authUrl + '/register', { name: name, email: email, password: password });
  }

  login(email: string, password: string) {
    return this.http.post(environment.authUrl + '/login', { email: email, password: password })
      .pipe(
        tap((req) => {
          console.log(req);
          this.storeUserData(req);
        })
      );
  }

  storeUserData(authResult: any) {
    const expireDate = moment(authResult.expiresAt).format('YYYY-MM-DDTHH:mm:ssZ');

    localStorage.setItem('expires_at', expireDate);
    localStorage.setItem('isFirstTime', authResult.isFirstTime);
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('user', JSON.stringify({ name: authResult.user.name, email: authResult.user.email }));
  }

  getSession() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isFirstTime() {
    return localStorage.getItem('isFirstTime') === 'true' ? true : false;
  }

  isUserLoggedIn(): boolean {
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
