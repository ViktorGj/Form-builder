import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PrivateComponent } from './private/private.component';
import { PrivateModule } from './private/private.module';

import { AppComponent } from './app.component';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';

@NgModule({
  declarations: [
    AppComponent,
    KitchenSinkComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PublicModule,
    PrivateModule
  ],
  exports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
