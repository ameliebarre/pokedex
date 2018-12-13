import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private headers: Headers;

  constructor(
    private http: HttpClient,
  ) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
  
}
