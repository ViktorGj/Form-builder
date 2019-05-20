import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';
import { DashboardModule } from './private/dashboard/dashboard.module';
import { DragAndDropModule } from './private/drag-and-drop/drag-and-drop.module';
import { UserLayoutModule } from './public/user-layout/user-layout.module';
import { LoginModule } from './public/login/login.module';
import { PrivateComponent } from './private/private.component';
import { PrivateModule } from './private/private.module';


@NgModule({
  declarations: [
    AppComponent,
    KitchenSinkComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    SharedModule,
    PrivateModule,
    UserLayoutModule,
    LoginModule
  ],
  exports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
