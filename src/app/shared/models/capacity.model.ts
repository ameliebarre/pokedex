import { Schema } from 'mongoose';
import { Type } from './type.model';
import { Game } from './game.model';

export class Capacity {
  _id: string;
  name: string;
  slug: string;
  description: string;
  type: Type;
  generation: Array<{
    puissance: string;
    precision: string;
    pp: string;
    gen_number: number;
    games: Array<Game>
  }>;
  ct_cs: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || null;
    this.slug = obj && obj.slug || null;
    this.description = obj && obj.description || null;
    this.type = obj && obj.type || null;
    this.generation = obj && obj.generation || [];
    this.ct_cs = obj && obj.ct_cs || null;
  }
}
