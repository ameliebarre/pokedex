import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {User} from '../models/user.model';

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

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/register`, { username, email, password });
  }

  login(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap((req) => {
          this.storeUserData(req);
        })
      );
  }

  storeUserData(authResult: any) {
    const expireDate = moment(authResult.expiresAt).format('YYYY-MM-DDTHH:mm:ssZ');
    localStorage.setItem('expires_at', expireDate);
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('user', JSON.stringify(authResult.user));
  }

  getSession() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isUserLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    return !this.jwtHelperService.isTokenExpired(token);
  }

  isUserAdmin() {
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (user.permissions.indexOf('ADMIN') > -1) {
      return true;
    }
  }

  logout() {
    localStorage.clear();
    location.pathname = '/signin';
  }
}
