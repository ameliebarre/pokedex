import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/internal/operators';

import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(
    private http: HttpClient
  ) { }

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(environment.apiUrl + '/trainers')
      .pipe(
        tap((response: Trainer[]) => {
          return response.map((trainer: Trainer) => {
            return new Trainer(trainer);
          });
        })
      );
  }
}
