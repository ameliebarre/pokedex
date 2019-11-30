import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-ui-switch';

import { SharedModule } from '../../shared/shared.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import {TypesModalComponent} from '../../components/types-modal/types-modal.component';
import { PokemonFiltersComponent } from './pokemon-filters/pokemon-filters.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    AddPokemonComponent,
    PokemonFormComponent,
    PokemonViewComponent,
    EditPokemonComponent,
    TypesModalComponent,
    PokemonFiltersComponent
  ],
  imports: [
    PokemonRoutingModule,
    SharedModule,
    UiSwitchModule,
  ],
  exports: [
    PokemonListComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    TypesModalComponent
  ]
})
export class PokemonModule {}
