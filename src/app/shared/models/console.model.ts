export class Console {
    _id: string;
    name: string;
    slug: string;
    games: any[];

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.slug = obj && obj.slug || null;
        this.games = obj && obj.games || [];
    }
}