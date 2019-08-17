import * as _ from 'lodash';
import { Type } from './type.model';
import { Game } from './game.model';

export class Pokemon {
  _id: string;
  name: string;
  slug: string;
  national: string;
  pokedex: Array<{
    game: Game,
    number: string,
    region: string,
    generation: number
  }>;
  description: string;
  sex: Array<string>;
  family: string;
  generation: string;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  sp_attack: number;
  sp_defense: number;
  speed: number;
  talents: Array<string>;
  evolutions: Array<{
    parent: {
      pokemon: Pokemon,
      evolution: string
    },
    children: {
      pokemon: Pokemon,
      evolution: string
    }
  }>;
  types: Type[] = [];

  constructor (obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || null;
    this.slug = obj && obj.slug || null;
    this.national = obj && obj.national || null;
    this.pokedex = obj && obj.pokedex || [{ game: null, number: null, region: null, generation: null }];
    this.description = obj && obj.description || null;
    this.sex = obj && obj.sex || [];
    this.family = obj && obj.family || [];
    this.generation = obj && obj.generation || null;
    this.height = obj && Number(obj.height) || null;
    this.weight = obj && Number(obj.weight) || null;
    this.hp = obj && obj.hp || null;
    this.attack = obj && obj.attack || null;
    this.defense = obj && obj.defense || null;
    this.sp_attack = obj && obj.sp_attack || null;
    this.sp_defense = obj && obj.sp_defense || null;
    this.speed = obj && obj.speed || null;
    this.talents = obj && obj.talents || [];
    this.evolutions = obj && obj.evolutions || [{ parent: null, children: null }];
    this.types = obj && obj.types || [];
  }
}
