import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgMultiSelectDropDownModule,
    NgbModule
  ]
})
export class SharedModule { }
