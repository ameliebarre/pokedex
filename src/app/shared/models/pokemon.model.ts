import { Type } from './type.model';
import { Capacity } from './capacity.model';

export class Pokemon {
  _id: string;
  names: {
    french: string;
    english: string;
    japanese: string;
  };
  slug: string;
  pokedex: [
    {
      name: string;
      key: string;
      number: string;
      version: Array<{
        name: string;
        key: string;
      }>
    }
  ];
  description: string;
  sex: string[];
  family: string;
  generation: number;
  height: number;
  weight: number;
  statistics: {
    hp: {
      name: string,
      value: number
    },
    attack: {
      name: string,
      value: number
    },
    defense: {
      name: string,
      value: number
    },
    sp_attack: {
      name: string,
      value: number
    },
    sp_defense: {
      name: string,
      value: number
    },
    speed: {
      name: string,
      value: number
    };
  };
  catch_rate: number;
  talents: string[];
  evolutions: [{
    parent: {
      pokemon: Pokemon,
      evolution: string
    },
    children: {
      pokemon: Pokemon,
      evolution: string
    }
  }];
  capacities: [{
    capacity: Capacity;
    generation: number;
  }];
  size: string;
  types: Type[] = [];
  next: Pokemon;
  prev: Pokemon;

  constructor (obj?: any) {
    this._id = obj && obj._id || null;
    this.names = obj && obj.names || { french: null, english: null, japanese: null };
    this.slug = obj && obj.slug || null;
    this.pokedex = obj && obj.pokedex || [];
    this.description = obj && obj.description || null;
    this.sex = obj && obj.sex || [];
    this.family = obj && obj.family || [];
    this.generation = obj && obj.generation || null;
    this.height = obj && obj.height || null;
    this.weight = obj && obj.weight || null;
    this.statistics = obj && obj.statistics || { hp: null, attack: null, defense: null, sp_attack: null, sp_defense: null, speed: null };
    this.catch_rate = obj && obj.catch_rate || null;
    this.talents = obj && obj.talents || [];
    this.evolutions = obj && obj.evolutions || [{ parent: null, children: null }];
    this.capacities = obj && obj.capacities || [];
    this.size = obj && obj.size || null;
    this.types = obj && obj.types || [];
    this.next = obj && obj.next || null;
    this.prev = obj && obj.prev || null;
  }
}
