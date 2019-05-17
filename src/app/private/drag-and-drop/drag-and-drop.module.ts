import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { DragAndDropComponent } from './drag-and-drop.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DragAndDropComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    DragAndDropRoutingModule
  ]
})
export class DragAndDropModule { }
