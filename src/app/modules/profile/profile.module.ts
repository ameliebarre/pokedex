import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { UserInformationsComponent } from './user-informations/user-informations.component';

@NgModule({
  declarations: [UserInformationsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
