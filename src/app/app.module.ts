import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PublicModule } from './public/public.module';
import { AppRoutingModule } from './app-routing.module';
import { PrivateModule } from './private/private.module';

import { AppComponent } from './app.component';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    KitchenSinkComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    PublicModule,
    PrivateModule,
    RouterModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
