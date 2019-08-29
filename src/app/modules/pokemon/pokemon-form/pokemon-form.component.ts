import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  pokemonForm: FormGroup;
  isExists = false;
  dropdownGenerations = [];
  dropdownGenerationsSettings = {};
  slug: string;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private gameService: GameService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.slug = this.route.snapshot.params['slug'];

    if (this.slug) {
      this.loadPokemonDetails(this.slug);
    }

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

  loadPokemonDetails(slug: string) {
    this.pokemonService.getPokemonBySlug(slug).subscribe(
      (pokemon: Pokemon) => {
        console.log(pokemon);
        this.pokemonForm.controls['name'].setValue(pokemon.name);
        this.pokemonForm.controls['slug'].setValue(pokemon.slug);
        this.pokemonForm.controls['english_name'].setValue(pokemon.english_name);
        this.pokemonForm.controls['japanese_name'].setValue(pokemon.japanese_name);
        this.pokemonForm.controls['national'].setValue(pokemon.national);
        this.pokemonForm.controls['kanto'].setValue(pokemon.kanto);
        this.pokemonForm.controls['johto_oac'].setValue(pokemon.johto_oac);
        this.pokemonForm.controls['johto_hgss'].setValue(pokemon.johto_hgss);
        this.pokemonForm.controls['hoenn_rse'].setValue(pokemon.hoenn_rse);
        this.pokemonForm.controls['hoenn_rosa'].setValue(pokemon.hoenn_rosa);
        this.pokemonForm.controls['sinnoh'].setValue(pokemon.sinnoh);
        this.pokemonForm.controls['unys_nb'].setValue(pokemon.unys_nb);
        this.pokemonForm.controls['unys_n2b2'].setValue(pokemon.unys_n2b2);
        this.pokemonForm.controls['kalos'].setValue(pokemon.kalos);
        this.pokemonForm.controls['alola_sl'].setValue(pokemon.alola_sl);
        this.pokemonForm.controls['alola_usul'].setValue(pokemon.alola_usul);
        this.pokemonForm.controls['family'].setValue(pokemon.family);
        this.pokemonForm.controls['description'].setValue(pokemon.description);
      }
    );
  }

  setPokemonForm() {
    this.pokemonForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      slug: ['', Validators.required],
      english_name: ['', Validators.required],
      japanese_name: ['', Validators.required],
      national: ['', Validators.required],
      kanto: [''],
      johto_oac: [''],
      johto_hgss: [''],
      hoenn_rse: [''],
      hoenn_rosa: [''],
      sinnoh: [''],
      unys_nb: [''],
      unys_n2b2: [''],
      kalos: [''],
      alola_sl: [''],
      alola_usul: [''],
      family: ['', Validators.required],
      generation: [{ item_id: 1, item_text: 'Première' }, Validators.required],
      description: ['', Validators.required]
    });
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
