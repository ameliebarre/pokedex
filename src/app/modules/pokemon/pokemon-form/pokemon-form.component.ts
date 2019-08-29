import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, FormArray} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { Pokemon } from '../../../shared/models/pokemon.model';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { GameService } from '../../../shared/services/game.service';


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;

  selectedPokemon: Pokemon;
  pokemonForm: FormGroup;
  isExists = false;
  dropdownGenerations = [];
  dropdownGenerationsSettings = {};
  slug: string;

  generations = [
    { id: 1, genre:'Première' },
    { id: 2, genre:'Deuxième' },
    { id: 3, genre:'Troisième' },
    { id: 4, genre:'Quatrième' }
  ];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private gameService: GameService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.setPokemonForm();

    this.dropdownGenerations = [
      { item_id: 1, item_text: 'Première' },
      { item_id: 2, item_text: 'Deuxième' },
      { item_id: 3, item_text: 'Troisième' },
      { item_id: 4, item_text: 'Quatrième' },
      { item_id: 5, item_text: 'Cinquième' }
    ];

    this.dropdownGenerationsSettings = {
      singleSelection: true,
      placeholder: 'Choisir la génération du Pokemon',
      idField: 'item_id',
      textField: 'item_text',
      allowSearchFilter: false,
      enableCheckAll: false
    };
  }

  setPokemonForm() {

    const formControls = this.generations.map(generation => new FormControl(false));

    this.pokemonForm = this.fb.group({
      id: [this.pokemon._id],
      name: [this.pokemon.name, Validators.required],
      slug: [this.pokemon.slug, Validators.required],
      national: [this.pokemon.national, Validators.required],
      kanto: [this.pokemon.kanto],
      johto_oac: [this.pokemon.johto_oac],
      johto_hgss: [this.pokemon.johto_hgss],
      hoenn_rse: [this.pokemon.hoenn_rse],
      hoenn_rosa: [this.pokemon.hoenn_rosa],
      sinnoh: [this.pokemon.sinnoh],
      unys_nb: [this.pokemon.unys_nb],
      unys_n2b2: [this.pokemon.unys_n2b2],
      kalos: [this.pokemon.kalos],
      alola_sl: [this.pokemon.alola_sl],
      alola_usul: [this.pokemon.alola_usul],
      family: [this.pokemon.family, Validators.required],
      // generation: this.fb.array(formControls),
      description: [this.pokemon.description, Validators.required]
    });
  }

  get generationsArray() {
    return this.pokemonForm.get('generation') as FormArray;
  }

  /**
   * Set the value for the slug based on the name input
   * Check if the Pokemon already exists. If it does, display an error message.
   *
   * @param event
   */
  bindNameValue(event: any) {
    const pokemonName = event.target.value;
    this.pokemonForm.get('slug').setValue(pokemonName.toLowerCase());

    // Check among the list of all Pokemons if the name value exists
    this.pokemonService.getAllPokemons().subscribe(
      (pokemons: Pokemon[]) => {
        const index = _.findIndex(pokemons, { name: pokemonName });

        this.isExists = index !== -1;
      }
    );
  }

  /**
   * Remove the text in the input name
   * (only if the Pokemon already exists)
   */
  removeName() {
    this.pokemonForm.get('name').setValue('');
    this.pokemonForm.get('slug').setValue('');
    this.isExists = false;
  }

  /**
   * Choose the Pokemon's generation
   * @param {{item_id: number, item_text: string}} event
   */
  onGenerationSelect(event: { item_id: number, item_text: string }) {
    this.pokemonForm.get('generation').setValue({ item_id: event.item_id, item_name: event.item_text });
  }

  savePokemon() { }

}
