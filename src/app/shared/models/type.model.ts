export class Type {
  _id: number;
  name: string;
  slug: string;
  color: string;

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || null;
    this.slug = obj && obj.slug || null;
    this.color = obj && obj.color || null;
  }
}
