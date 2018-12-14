import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../../shared/services/pokemon.service';
import { Pokemon } from '../../shared/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: any[] = [];
  token: string;

  pokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user'));
    this.token = localStorage.getItem('token');

    this.getpokemons();
  }

  getpokemons() {
    this.pokemonService.getAllPokemons().subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
      console.log(this.pokemons);
    });
  }

}
