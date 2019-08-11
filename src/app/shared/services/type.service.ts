import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Type } from '../models/type.model';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Pokemon} from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get all Pokemon types
   *
   * @returns {Observable<Type[]>}
   */
  getAllTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(`${environment.apiUrl}/types`)
      .pipe(
        map((response: Type[]) => {
          return response.map((type: Type) => {
            return new Type(type);
          });
        })
      );
  }

}
