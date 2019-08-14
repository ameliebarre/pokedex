import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../../../shared/models/pokemon.model';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

}
