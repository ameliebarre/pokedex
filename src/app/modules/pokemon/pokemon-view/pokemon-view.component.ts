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
  prevPokemon: Pokemon;
  nextPokemon: Pokemon;
  showPrev: boolean;
  showNext: boolean;

  constructor(
    public pokemonService: PokemonService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {

    this.showPrev = false;
    this.showNext = false;

    const slug = this.route.snapshot.params['slug'];

    this.pokemonService.getPokemonBySlug(slug).subscribe(
      (pokemon: Pokemon) => {
        this.pokemon = pokemon;

        if (this.pokemon.next !== null) {
          this.nextPokemon = this.pokemon.next;
        }

        if (this.pokemon.prev !== null) {
          this.prevPokemon = this.pokemon.prev;
        }
      }
    );
  }

  showNextPokemon() {
    this.showNext = true;
  }

  hideNextPokemon() {
    this.showNext = false;
  }

  showPreviousPokemon() {
    this.showPrev = true;
  }

  hidePreviousPokemon() {
    this.showPrev = false;
  }

  viewPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.slug]);
  }
}
