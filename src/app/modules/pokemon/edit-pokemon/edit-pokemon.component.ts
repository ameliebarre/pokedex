import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../../shared/services/pokemon.service';
import {Pokemon} from '../../../shared/models/pokemon.model';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];

    this.pokemonService.getPokemonBySlug(slug).subscribe(
      (pokemon: Pokemon) => {
        this.pokemon = pokemon;
      }
    );
  }

}
