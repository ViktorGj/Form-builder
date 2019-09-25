import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropRoutingModule } from './drag-drop-routing.module';
import { DragDropComponent } from './drag-drop.component';
import { MatCardModule } from '@angular/material';
import { DragDropModule } from '../../../../node_modules/@angular/cdk/drag-drop';
import { DynamicFormModule } from './dynamic-form/dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [
    DragDropComponent,
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    DragDropRoutingModule,
    MatCardModule,
    DragDropModule,
    DynamicFormModule
  ],
  exports: [
    DragDropComponent
  ]
})
export class DragDropViewModule { }
