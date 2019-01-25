import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/internal/operators';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getProfile(id: number): Observable<User> {
    return this.http.get<User>(environment.apiUrl + '/profile/' + id)
      .pipe(
        tap((user: User) => {
          return new User(user);
        })
      );
  }
}
