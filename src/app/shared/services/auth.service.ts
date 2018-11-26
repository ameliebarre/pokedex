import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private headers: Headers;
  public helper;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');

    this.helper = new JwtHelperService();
  }

  login(email: string, password: string) {
    return this.http.post(environment.authUrl + '/login', { email: email, password: password });
  }
}
