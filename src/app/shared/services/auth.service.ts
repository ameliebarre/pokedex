import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

interface UserResponse {
  user: User,
  token: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService,
    private router: Router
  ) {}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/register`, { username, email, password });
  }

  /**
   * Signin
   * @param email
   * @param password
   * @returns {Promise<UserResponse>}
   */
  signin(email: string, password: string): Promise<UserResponse> {
    return this.http.post<UserResponse>(`${environment.apiUrl}/auth/signin`, { email, password })
      .pipe(
        tap((req) => {
          this.storeUserData(req);
          this.router.navigate(['home']);
        })
      )
      .toPromise();
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
