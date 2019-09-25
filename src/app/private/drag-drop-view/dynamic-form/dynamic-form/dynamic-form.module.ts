import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './containers/dynamic-form.component';

import { FormInputComponent } from './components/form-input/form-input.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RadioComponent } from './components/radio/radio.component';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    DynamicFormComponent,
    FormInputComponent,
    FormCheckboxComponent,
    RadioComponent,

  ],
  entryComponents: [
    FormInputComponent,
    FormCheckboxComponent,
    RadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    RouterModule,
    CKEditorModule
  ],
  exports: [
    DynamicFormComponent
  ],
})
export class DynamicFormModule { }
