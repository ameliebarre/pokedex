import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private http: HttpClient
  ) { }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.apiUrl}/games`)
      .pipe(
        map((response: Game[]) => {
          return response.map((game: Game) => {
            return new Game(game);
          });
        })
      );
  }
}
