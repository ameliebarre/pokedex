import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private headers: Headers;
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) {
  }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('http://localhost:4500/api/pokemons');
  }

}
