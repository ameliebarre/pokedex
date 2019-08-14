import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import { Pokemon } from '../../../shared/models/pokemon.model';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;

  pokemonForm: FormGroup;

  constructor(
    private pokemonService: PokemonService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.setPokemonForm();
  }

  setPokemonForm() {
    this.pokemonForm = this.fb.group({
      id: [this.pokemon._id],
      name: [this.pokemon.national_number],
      slug: [this.pokemon.slug],
      numbers: this.fb.group({
        national_number: [this.pokemon.national_number],
        kanto_number: [this.pokemon.kanto_number],
        johto_number: [this.pokemon.johto_number],
        hoenn_number: [this.pokemon.hoenn_number],
        sinnoh_number: [this.pokemon.sinnoh_number],
        unys_number: [this.pokemon.unys_number],
        kalos_number: [this.pokemon.kalos_number],
        alola_number: [this.pokemon.alola_number],
      }),
      family: [this.pokemon.family]
    });
  }

  get numbers() {
    return this.pokemonForm.controls.numbers as FormGroup;
  }

  savePokemon() { }

}
