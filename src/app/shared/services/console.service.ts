import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

import { Console } from '../models/console.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Get the list of all consoles
   */
  getAllConsoles(): Observable<Console[]> {
    return this.httpClient.get<Console[]>(`${environment.apiUrl}/games`)
      .pipe(
        map((response: Console[]) => {
          return response.map((console: Console) => {
            return new Console(console);
          });
        })
      );
  }
}
