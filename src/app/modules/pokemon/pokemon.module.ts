import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonModule { }
