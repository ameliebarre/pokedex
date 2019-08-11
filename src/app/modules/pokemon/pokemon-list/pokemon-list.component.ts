import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Pokemon } from '../../../shared/models/pokemon.model';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { Type } from '../../../shared/models/type.model';
import { TypeService } from '../../../shared/services/type.service';
import { trigger, query, state, stagger, style, animate, transition } from '@angular/animations';
import { Observable, forkJoin } from 'rxjs'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  dropdownGenerations = [];
  dropdownGenerationsSettings = {};
  dropdownTypes = [];
  dropdownTypesSettings = {};
  generations: any[] = [];
  types: Type[] = [];
  typeItems: any[] = [];
  selectedType: Type;
  active: boolean;
  currentState = 'initial';

  constructor(
    private pokemonService: PokemonService,
    private typeService: TypeService
  ) { }

  ngOnInit() {
    this.getPokemons();
    this.getTypes();

    this.dropdownGenerations = [
      { item_id: 1, item_text: 'Première' },
      { item_id: 2, item_text: 'Deuxième' },
      { item_id: 3, item_text: 'Troisième' },
      { item_id: 4, item_text: 'Quatrième' },
      { item_id: 5, item_text: 'Cinquième' }
    ];

    this.dropdownGenerationsSettings = {
      singleSelection: false,
      placeholder: 'Filtrer par génération',
      selectAllText: 'Tout sélectionner',
      unSelectAllText: 'Tout déselectionner',
      idField: 'item_id',
      textField: 'item_text',
      allowSearchFilter: false,
      itemsShowLimit: 3
    };

    this.dropdownTypes = [
      { item_text: 'Eau', item_slug: 'eau' },
      { item_text: 'Électrique', item_slug: 'electrique' },
      { item_text: 'Feu', item_slug: 'feu' },
      { item_text: 'Poison', item_slug: 'poison' },
      { item_text: 'Combat', item_slug: 'combat' },
    ];

    this.dropdownTypesSettings = {
      singleSelection: false,
      placeholder: 'Filtrer par type',
      selectAllText: 'Tout sélectionner',
      unSelectAllText: 'Tout déselectionner',
      idField: 'item_text',
      textField: 'item_text',
      allowSearchFilter: false,
      itemsShowLimit: 3
    };

    // this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  /**
   * Get the list of all Pokemons
   */
  getPokemons() {
    this.pokemonService.getAllPokemons().subscribe(
      (pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      }
    );
  }

  /**
   * Get the list of all Pokemon types
   */
  getTypes() {
    this.typeService.getAllTypes().subscribe(
      (types: Type[]) => {
        this.types = types;
      }
    );
  }

  onGenerationSelect(generation: { item_id: number, item_text: string }) {
    this.generations.push(generation.item_id);
    this.filterGenerations(this.generations);
  }

  onGenerationDeselect(generation: { item_id: number, item_text: string }) {
    this.generations = _.remove(this.generations, (g) => {
      return g !== generation.item_id;
    });

    this.filterGenerations(this.generations);
  }

  onGenerationSelectAll(items: any) {
    console.log(items);
  }

  filterGenerations(generations: Array<number>) {
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

  onTypeSelect(type: string) {
    this.typeItems.push(type);
    this.pokemonService.filterByType(this.typeItems).subscribe(
      (pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      }
    );
  }

  /*onTypeDeselect(type: { id: string, itemName }) {
    this.generations = _.remove(this.generations, (g) => {
      return g !== type.name;
    });
  }
  */
}
