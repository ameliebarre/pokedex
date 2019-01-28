import {Pokemon} from './pokemon.model';

export class User {
  _id: string;
  username: string;
  name: string;
  firstname: string;
  birthdate: string;
  city: string;
  zipcode: number;
  country: string;
  sex: string;
  phone: number;
  isFirstTime: boolean;
  password: string;
  email: string;
  permissions: any[];
  token: string;
  pokemons: Pokemon[];
  trainer: any;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.username = obj && obj.username || null;
    this.name = obj && obj.name || null;
    this.firstname = obj && obj.firstname || null;
    this.birthdate = obj && obj.birthdate || null;
    this.city = obj && obj.city || null;
    this.zipcode = obj && obj.zipcode || null;
    this.country = obj && obj.country || 'France';
    this.sex = obj && obj.sex || null;
    this.phone = obj && obj.phone || null;
    this.isFirstTime = obj && obj.isFirstTime || false;
    this.password = obj && obj.password || null;
    this.email = obj && obj.email || null;
    this.permissions = obj && obj.permissions || [];
    this.token = obj && obj.token || null;
    this.pokemons = obj && obj.pokemons || [];
    this.trainer = obj && obj.trainer || false;
  }
}
