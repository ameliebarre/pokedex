export class Trainer {
  _id: number;
  name: string;
  slug: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || null;
    this.slug = obj && obj.slug || null;
  }
}
