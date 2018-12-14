import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../../shared/services/pokemon.service';
import { Pokemon } from '../../shared/models/pokemon.model';
import {AuthService} from '../../shared/services/auth.service';
import {HttpHeaders} from '@angular/common/http';

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
    private pokemonService: PokemonService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user'));
    this.token = localStorage.getItem('token');

    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getAllPokemons().subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
      console.log(this.pokemons);
    });
  }

}
