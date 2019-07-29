import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleListComponent } from './console-list/console-list.component';

@NgModule({
  declarations: [ConsoleListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
