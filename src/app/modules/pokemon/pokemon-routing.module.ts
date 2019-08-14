import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
