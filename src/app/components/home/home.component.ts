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
  isNew: boolean;

  pokemons: Pokemon[] = [];
  source: string;

  constructor(
    private pokemonService: PokemonService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user'));
    this.token = localStorage.getItem('token');

    this.getPokemons();

    // Check if it's the first time in the app for the user
    this.getStatus();
  }

  getPokemons() {
    this.pokemonService.getAllPokemons().subscribe((data: Pokemon[]) => {
      this.pokemons = data;
      console.log(this.pokemons);
    });
  }

  getStatus() {
    this.isNew = this.authService.isFirstTime();
    console.log(this.isNew);
  }

}
