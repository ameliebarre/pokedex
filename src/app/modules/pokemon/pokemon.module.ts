import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import {PokemonRoutingModule} from './pokemon-routing.module';

@NgModule({
  declarations: [
    PokemonListComponent,
    AddPokemonComponent
  ],
  imports: [
    PokemonRoutingModule,
    SharedModule,
  ],
  exports: [
    PokemonListComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PokemonModule { }
