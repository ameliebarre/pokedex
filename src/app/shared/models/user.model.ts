export class User {
  id: number;
  name: string;
  password: string;
  email: string;
  token: string;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.password = obj && obj.password || null;
    this.email = obj && obj.email || null;
    this.token = obj && obj.token || null;
  }
}
