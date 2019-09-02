import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    FilterPipe
  ],
  exports: [
    CommonModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    NgbModule,
    FilterPipe,
  ]
})
export class SharedModule { }
