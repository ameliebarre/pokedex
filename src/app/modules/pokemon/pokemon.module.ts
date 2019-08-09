import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    PokemonListComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PokemonModule { }
