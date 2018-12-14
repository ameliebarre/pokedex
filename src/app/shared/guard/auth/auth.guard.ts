import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private jwtHelperService: JwtHelperService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.authService.getSession());
    if (this.authService.isUserLoggedIn()) {
      // console.log(this.jwtHelperService.isTokenExpired(token));
      return true;
    } else {
      console.log('not logged');
      this.authService.logout();

      return false;
    }
  }
}
