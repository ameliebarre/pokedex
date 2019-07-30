import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInformationsComponent } from './user-informations/user-informations.component';

const routes: Routes = [
  {
    path: ':id',
    component: UserInformationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
