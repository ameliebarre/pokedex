import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

import { SharedModule } from '../../shared/shared.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    AddPokemonComponent,
    PokemonFormComponent
  ],
  imports: [
    PokemonRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    PokemonListComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PokemonModule {
  constructor() {
    library.add(faBackspace);
  }
}
