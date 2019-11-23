import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonService } from '../../../shared/services/pokemon.service';
import { Pokemon } from '../../../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {

  pokemon: Pokemon;
  statistics = [];

  constructor(
    public pokemonService: PokemonService,
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

        for (let key in this.pokemon.statistics) {
          this.statistics.push({
            name: this.pokemon.statistics[key].name,
            value: this.pokemon.statistics[key].value,
            percentage: this.calculatePercentage(this.pokemon.statistics[key].value)
          });
        }
      }
    );
  }

  calculatePercentage(value: number) {
    return (100*value)/250;
  }
}
