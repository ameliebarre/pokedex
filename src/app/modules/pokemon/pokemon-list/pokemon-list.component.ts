import { Component, Input, OnInit } from '@angular/core';

import { Pokemon } from '../../../shared/models/pokemon.model';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getAllPokemons().subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    });
  }
}
