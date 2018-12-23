export class Pokemon {
  _id: string;
  name: string;
  slug: string;
  national_number: string;
  johto_number: string;
  description: string;
  sex: string[];
  generation: string;
  height: string;
  weight: string;
  hp: number;
  attack: number;
  defense: number;
  sp_attack: number;
  sp_defense: number;
  speed: number;
  thumb: string;
  image: string;
  evolution: Pokemon;
  evolution_way: string;

  constructor (obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || null;
    this.slug = obj && obj.slug || null;
    this.national_number = obj && obj.national_number || null;
    this.johto_number = obj && obj.johto_number || null;
    this.description = obj && obj.description || null;
    this.sex = obj && obj.sex || [];
    this.generation = obj && obj.generation || null;
    this.height = obj && obj.height || null;
    this.weight = obj && obj.weight || null;
    this.hp = obj && Number(obj.hp) || null;
    this.attack = obj && Number(obj.attack) || null;
    this.defense = obj && Number(obj.defense) || null;
    this.sp_attack = obj && Number(obj.sp_attack) || null;
    this.sp_defense = obj && Number(obj.sp_defense) || null;
    this.speed = obj && Number(obj.speed) || null;
    this.thumb = obj && obj.thumb || null;
    this.image = obj && obj.image || null;
    this.evolution = obj && obj.evolution || null;
    this.evolution_way = obj && obj.evolution_way || null;
  }
}
