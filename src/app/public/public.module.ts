import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginModule } from './login/login.module';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ThankYouModule } from './thank-you/thank-you.module';

@NgModule({
  declarations: [
    PublicComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LoginModule,
    ThankYouModule
  ]
})
export class PublicModule { }
