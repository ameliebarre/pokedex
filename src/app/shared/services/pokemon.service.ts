import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environment.apiUrl}/pokemons`)
      .pipe(
        map((response: Pokemon[]) => {
          return response.map((pokemon: Pokemon) => {
            return new Pokemon(pokemon);
          });
        })
      );
  }

}
