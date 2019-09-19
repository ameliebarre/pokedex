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
  pokedex: {
    national: string;
    kanto: string;
    johto_oac: string;
    johto_hgss: string;
    hoenn_rse: string;
    hoenn_rosa: string;
    sinnoh: string;
    unys_nb: string;
    unys_n2b2: string;
    kalos: string;
    alola_sl: string;
    alola_usul: string;
  };
  description: string;
  sex: Array<string>;
  family: string;
  generation: number;
  height: number;
  weight: number;
  statistics: {
    hp: number;
    attack: number;
    defense: number;
    sp_attack: number;
    sp_defense: number;
    speed: number;
  };
  catch_rate: number;
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
  capacities: Array<{
    capacity: Capacity;
    generation: number;
  }>;
  types: Type[] = [];
  next: Pokemon;
  prev: Pokemon;

  constructor (obj?: any) {
    this._id = obj && obj._id || null;
    this.names = obj && obj.names || { french: null, english: null, japanese: null };
    this.slug = obj && obj.slug || null;
    this.pokedex = obj && obj.pokedex || {
      national: null,
      kanto: null,
      johto_hgss: null,
      johto_oac: null,
      hoenn_rse: null,
      hoenn_rosa: null,
      sinnoh: null,
      unys_nb: null,
      unys_n2b2: null,
      kalos: null,
      alola_sl: null,
      alola_usul: null
    };
    this.description = obj && obj.description || null;
    this.sex = obj && obj.sex || [];
    this.family = obj && obj.family || [];
    this.generation = obj && obj.generation || null;
    this.height = obj && Number(obj.height) || null;
    this.weight = obj && Number(obj.weight) || null;
    this.statistics = obj && obj.statistics || { hp: null, attack: null, defense: null, sp_attack: null, sp_defense: null, speed: null };
    this.catch_rate = obj && obj.catch_rate || null;
    this.talents = obj && obj.talents || [];
    this.evolutions = obj && obj.evolutions || [{ parent: null, children: null }];
    this.capacities = obj && obj.capacities || [];
    this.types = obj && obj.types || [];
    this.next = obj && obj.next || null;
    this.prev = obj && obj.prev || null;
  }
}
