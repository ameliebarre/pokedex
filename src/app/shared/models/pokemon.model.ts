import * as _ from 'lodash';
import { Type } from './type.model';
import { Game } from './game.model';

export class Pokemon {
  _id: string;
  name: string;
  slug: string;
  english_name: string;
  japanese_name: string;
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
  description: string;
  sex: Array<string>;
  family: string;
  generation: number;
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
    this.english_name = obj && obj.english_name || null;
    this.japanese_name = obj && obj.japanese_name || null;
    this.national = obj && obj.national || null;
    this.kanto = obj && obj.kanto || null;
    this.johto_oac = obj && obj.johto_oac || null;
    this.johto_hgss = obj && obj.johto_hgss || null;
    this.hoenn_rse = obj && obj.hoenn_rse || null;
    this.hoenn_rosa = obj && obj.hoenn_rosa || null;
    this.sinnoh = obj && obj.sinnoh || null;
    this.unys_nb = obj && obj.unys_nb || null;
    this.unys_n2b2 = obj && obj.unys_n2b2 || null;
    this.kalos = obj && obj.kalos || null;
    this.alola_sl = obj && obj.alola_sl || null;
    this.alola_usul = obj && obj.alola_usul || null;
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
