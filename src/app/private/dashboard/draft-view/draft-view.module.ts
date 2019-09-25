import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraftViewRoutingModule } from './draft-view-routing.module';
import { DraftViewComponent } from './draft-view.component';

@NgModule({
  declarations: [
    DraftViewComponent
  ],
  imports: [
    CommonModule,
    DraftViewRoutingModule
  ]
})
export class DraftViewModule { }
