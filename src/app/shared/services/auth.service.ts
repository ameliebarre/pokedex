import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers: Headers;

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {
    this.headers = new Headers();
    this.header.append('Content-Type', 'application/json');
  }
}
