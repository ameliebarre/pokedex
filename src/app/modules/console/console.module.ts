import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleListComponent } from './console-list/console-list.component';

@NgModule({
  declarations: [ConsoleListComponent],
  imports: [
    SharedModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
