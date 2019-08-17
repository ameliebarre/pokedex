import { Pokemon } from './pokemon.model';

export class Game {
    _id: string;
    name: string;
    slug: string;
    pokemons: Pokemon[];

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.slug = obj && obj.slug || null;
        this.pokemons = obj && obj.pokemons || [];
    }
}
