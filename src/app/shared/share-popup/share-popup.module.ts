import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedPopupRoutingModule } from './share-popup-routing.module';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedPopupRoutingModule
  ],
  providers: [
    UserService
  ],
})
export class SharedPopupModule { }
