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

  public udateProfile(user: User): Observable<User> {
    return this.http.put<User>(environment.apiUrl + '/profile/' + user._id, user);
  }
}
