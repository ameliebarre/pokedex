import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddPokemonComponent
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
