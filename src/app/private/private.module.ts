import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DragAndDropModule } from './drag-and-drop/drag-and-drop.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    DashboardModule,
    DragAndDropModule
  ]
})
export class PrivateModule { }
