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
  ) { }

  /**
   * Get the list of all Pokemons
   *
   * @returns {Observable<Pokemon[]>}
   */
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

  /**
   * Get Pokemon by its slug
   *
   * @param {string} slug
   * @returns {Observable<Pokemon>}
   */
  getPokemonBySlug(slug: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.apiUrl}/pokemons/${slug}`)
      .pipe(
        map((pokemon: Pokemon) => {
          return new Pokemon(pokemon);
        })
      );
  }

  /**
   * Create a Pokemon
   *
   * @param {Pokemon} pokemon
   * @returns {Observable<Pokemon>}
   */
  savePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${environment.apiUrl}/pokemons`, pokemon);
  }

  /**
   * Update a Pokemon
   *
   * @param {Pokemon} pokemon
   * @returns {Observable<Pokemon>}
   */
  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${environment.apiUrl}/pokemons/${pokemon.slug}`, pokemon);
  }

  /**
   * Filter Pokemons by their generation
   *
   * @param {Array<number>} generations
   * @returns {Observable<Pokemon[]>}
   */
  filterByGeneration(generations: Array<number>): Observable<Pokemon[]> {
    return this.http.post<Pokemon[]>(`${environment.apiUrl}/pokemons/generations`, { generations: generations });
  }

  getPokemonGenerationToString(pokemon: Pokemon) {
    let generation: string = '';
    switch (pokemon.generation) {
      case 1:
        generation = '1ère génération';
        break;

      case 2:
        generation = '2ème génération';
        break;

      case 3:
        generation = '3ème génération';
        break;

      case 4:
        generation = '4ème génération';
        break;

      case 5:
        generation = '5ème génération';
        break;
    }

    return generation;
  }

}
