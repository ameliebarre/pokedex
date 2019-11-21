import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-filters',
  templateUrl: './pokemon-filters.component.html',
  styleUrls: ['./pokemon-filters.component.scss']
})
export class PokemonFiltersComponent implements OnInit {

  @Input() pokemons: Pokemon[] = [];

  @Output() term: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  getSearchedValue(value: string) {
    console.log('passe ici');
    this.term.emit(value);
  }

}
