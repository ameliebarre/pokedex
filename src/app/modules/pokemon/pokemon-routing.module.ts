import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddPokemonComponent
  },
  {
    path: ':slug/edit',
    component: EditPokemonComponent
  },
  {
    path: ':id',
    component: PokemonViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
