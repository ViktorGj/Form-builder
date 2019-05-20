import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginModule } from './login/login.module';
import { UserLayoutModule } from './user-layout/user-layout.module';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    PublicComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LoginModule,
    UserLayoutModule
  ]
})
export class PublicModule { }
