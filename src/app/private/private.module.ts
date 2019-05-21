import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DragAndDropModule } from './drag-and-drop/drag-and-drop.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    DashboardModule,
    DragAndDropModule,
    SharedModule
  ]
})
export class PrivateModule { }
