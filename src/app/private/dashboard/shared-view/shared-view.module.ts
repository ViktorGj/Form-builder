import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedViewRoutingModule } from './shared-view-routing.module';
import { SharedViewComponent } from './shared-view.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    SharedViewComponent
  ],
  imports: [
    CommonModule,
    SharedViewRoutingModule
  ],
  exports: [
    SharedViewComponent
  ],

})
export class SharedViewModule { }
