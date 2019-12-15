import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonService } from '../../../shared/services/pokemon.service';
import { Pokemon } from '../../../shared/models/pokemon.model';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {

  pokemon: Pokemon;
  statistics: any[] = [];
  pokedexNumbers: any[] = [];
  isUserAdmin: boolean;

  constructor(
    public pokemonService: PokemonService,
    public authService: AuthService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    // Reload component when the URL changed
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];

    this.pokemonService.getPokemonBySlug(slug).subscribe(
      (pokemon: Pokemon) => {
        this.pokemon = pokemon;

        // Compute the statistics of the Pokemon (name, value and percentage)
        this.computeStatistics(this.pokemon.statistics);

        // Get the Pokedex numbers
        this.getPokedexNumbers(this.pokemon.pokedex);
      }
    );

    this.isUserAdmin = this.authService.isUserAdmin();
  }

  computeStatistics(statistics) {
    for (let key in statistics) {
      this.statistics.push({
        name: statistics[key].name,
        value: statistics[key].value,
        percentage: this.calculatePercentage(statistics[key].value)
      });
    }
  }

  calculatePercentage(value: number) {
    return (100 * value) / 250;
  }

  getPokedexNumbers(pokedexNumbers: any[]) {
    for (let pokedex of pokedexNumbers) {
      if (pokedex.number != null) {
        this.pokedexNumbers.push(pokedex);
      }
    }
  }

  setImageSize(size: string) {
    let width = '';

    switch (size) {
      case 'small':
        width = '60%';
        break;

      case 'medium':
        width = '60%';
        break;

      case 'big':
        width = '70%';
        break;
    }

    return width;
  }
}
