import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

import { Pokemon } from '../../../shared/models/pokemon.model';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { GameService } from '../../../shared/services/game.service';
import { TypesModalComponent } from '../../../components/types-modal/types-modal.component';

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

  male = false;
  female = false;

  generations = [1, 2, 3, 4, 5, 6, 7, 8];
  selectedGeneration: number;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private gameService: GameService,
    private fb: FormBuilder,
    private toastr: ToastrManager,
    private modalService: NgbModal,
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
    this.pokemonForm = this.fb.group({
      _id: [this.pokemon._id],
      names: this.fb.group({
        french: [this.pokemon.names.french, Validators.required],
        english: [this.pokemon.names.english, Validators.required],
        japanese: [this.pokemon.names.japanese, Validators.required],
      }),
      slug: [this.pokemon.slug, Validators.required],
      pokedex: this.fb.group({
        national: [this.pokemon.pokedex.national, Validators.required],
        kanto: [this.pokemon.pokedex.kanto],
        johto_oac: [this.pokemon.pokedex.johto_oac],
        johto_hgss: [this.pokemon.pokedex.johto_hgss],
        hoenn_rse: [this.pokemon.pokedex.hoenn_rse],
        hoenn_rosa: [this.pokemon.pokedex.hoenn_rosa],
        sinnoh: [this.pokemon.pokedex.sinnoh],
        unys_nb: [this.pokemon.pokedex.unys_nb],
        unys_n2b2: [this.pokemon.pokedex.unys_n2b2],
        kalos: [this.pokemon.pokedex.kalos],
        alola_sl: [this.pokemon.pokedex.alola_sl],
        alola_usul: [this.pokemon.pokedex.alola_usul],
      }),
      family: [this.pokemon.family, Validators.required],
      generation: [this.pokemon.generation, Validators.required],
      description: [this.pokemon.description, Validators.required],
      talents: this.fb.array([]),
      evolutions: this.fb.array([]),
      sex: [this.pokemon.sex]
    });

    this.setPokemonTalents();
    this.setPokemonSex();
    this.setGeneration();
  }

  get talents(): FormArray {
    return this.pokemonForm.get('talents') as FormArray;
  }

  get evolutions(): FormArray {
    return this.pokemonForm.get('evolutions') as FormArray;
  }

  /**
   * Set the value for the slug based on the name input
   * Check if the Pokemon already exists. If it does, display an error message.
   *
   * @param event
   */
  bindNameValue(event: any) {
    const pokemonName = event.target.value;

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

  setGeneration() {
    if (this.pokemon._id) {
      this.selectedGeneration = this.pokemon.generation;
    } else {
      this.selectedGeneration = null;
    }
  }

  selectGeneration(generation: number) {
    this.selectedGeneration = generation;
    this.pokemonForm.get('generation').setValue(this.selectedGeneration);
  }

  addTalent() {
    if (this.talents.value.length > 1) {
      this.toastr.warningToastr(`Pas plus de deux talents pour un Pokemon`, 'Attention', {
        position: 'bottom-right'
      });
    } else {
      this.talents.push(this.fb.control(''));
    }
  }

  removeTalent(index: number) {
    this.talents.removeAt(index);
  }

  setPokemonTalents() {
    if (this.pokemon._id) {
      this.pokemon.talents.forEach((talent: string) => {
        this.talents.push(this.fb.control(talent));
      });
    } else {
      this.talents.push(this.fb.control(''));
    }
  }

  setPokemonSex() {
    const isMale = _.includes(this.pokemonForm.get('sex').value, 'male');
    const isFemale = _.includes(this.pokemonForm.get('sex').value, 'female');

    if (isMale) {
      this.male = isMale;
    }

    if (isFemale) {
      this.female = isFemale;
    }
  }

  switchMaleSex() {
    this.male = !this.male;

    if (!this.male) {
      this.removeSex(this.pokemonForm.get('sex').value, 'male');
    } else {
      this.pokemonForm.get('sex').value.push('male');
    }
  }

  switchFemaleSex() {
    this.female = !this.female;

    if (!this.female) {
      this.removeSex(this.pokemonForm.get('sex').value, 'female');
    } else {
      this.pokemonForm.get('sex').value.push('female');
    }
  }

  /**
   * Remove the given sexe from the Pokemon form sex array
   *
   * @param {Array<string>} sex
   * @param {string} scope
   */
  removeSex (sex: Array<string>, scope: string) {
    for(let i = 0; i < sex.length; i++){
      if (sex[i] === scope) {
        sex.splice(i, 1);
      }
    }
  }

  addType() {
    const modalRef = this.modalService.open(TypesModalComponent);
    modalRef.componentInstance.render = 'modal';
  }

  submit() {
    this.pokemon = new Pokemon(this.pokemonForm.value);

    if (this.pokemon._id === null) {
      this.save();
    } else {
      this.update();
    }
  }

  update() {
    this.pokemonService.updatePokemon(this.pokemon).subscribe((pokemon: Pokemon) => {
      this.toastr.successToastr(`${pokemon.names.french} a bien été modifié`,'Succès', {
        position: 'bottom-right'
      });
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.toastr.errorToastr('Erreur', 'La modification a échoué', {
        position: 'bottom-right'
      });
    });
  }

  save() {
    console.log('Save');
  }

  cancel() { }

}
