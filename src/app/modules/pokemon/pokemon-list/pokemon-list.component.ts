import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Pokemon } from '../../../shared/models/pokemon.model';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  generations: any[] = [];

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit() {
    this.getPokemons();

    this.dropdownList = [
      { item_id: 1, item_text: 'Première' },
      { item_id: 2, item_text: 'Deuxième' },
      { item_id: 3, item_text: 'Troisième' },
      { item_id: 4, item_text: 'Quatrième' },
      { item_id: 5, item_text: 'Cinquième' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      placeholder: 'Filtrer par génération',
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Tout sélectionner',
      unSelectAllText: 'Tout déselectionner',
      allowSearchFilter: false,
      itemsShowLimit: 3
    };
  }

  getPokemons() {
    this.pokemonService.getAllPokemons().subscribe(
      (pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      }
    );
  }

  onItemSelect(generation: { item_id: number, item_text: string }) {
    this.generations.push(generation.item_id);
    this.filter(this.generations);
  }

  onItemDeselect(generation: { item_id: number, item_text: string }) {
    this.generations = _.remove(this.generations, (g) => {
      return g !== generation.item_id;
    });

    this.filter(this.generations);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  filter(generations: Array<number>) {
    if (this.generations.length === 0) {
      this.getPokemons();
    } else {
      this.pokemonService.filterByGeneration(generations).subscribe(
        (pokemons: Pokemon[]) => {
          this.pokemons = pokemons;
        }
      );
    }
  }
}
