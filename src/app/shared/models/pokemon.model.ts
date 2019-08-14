import * as _ from 'lodash';
import { Type } from './type.model';

export class Pokemon {
  _id: string;
  name: string;
  slug: string;
  national_number: string;
  kanto_number: string;
  johto_number: string;
  hoenn_number: string;
  sinnoh_number: string;
  unys_number: string;
  kalos_number: string;
  alola_number: string;
  description: string;
  sex: Array<string>;
  family: string;
  generation: string;
  height: string;
  weight: string;
  hp: number;
  attack: number;
  defense: number;
  sp_attack: number;
  sp_defense: number;
  speed: number;
  evolution: Pokemon;
  evolution_way: string;
  types: Type[] = [];

  constructor (obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || null;
    this.slug = obj && obj.slug || null;
    this.national_number = obj && obj.national_number || null;
    this.kanto_number = obj && obj.kanto_number || null;
    this.johto_number = obj && obj.johto_number || null;
    this.hoenn_number = obj && obj.hoenn_number || null;
    this.sinnoh_number = obj && obj.sinnoh_number || null;
    this.unys_number = obj && obj.unys_number || null;
    this.kalos_number = obj && obj.kalos_number || null;
    this.alola_number = obj && obj.alola_number || null;
    this.description = obj && obj.description || null;
    this.sex = obj && obj.sex || [];
    this.family = obj && obj.family || [];
    this.generation = obj && obj.generation || null;
    this.height = obj && obj.height || null;
    this.weight = obj && obj.weight || null;
    this.hp = obj && Number(obj.hp) || null;
    this.attack = obj && Number(obj.attack) || null;
    this.defense = obj && Number(obj.defense) || null;
    this.sp_attack = obj && Number(obj.sp_attack) || null;
    this.sp_defense = obj && Number(obj.sp_defense) || null;
    this.speed = obj && Number(obj.speed) || null;
    this.evolution = obj && obj.evolution || null;
    this.evolution_way = obj && obj.evolution_way || null;
    this.types = obj && obj.types || [];
  }
}
