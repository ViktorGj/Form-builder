import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    QuestionnaireComponent,
    NavbarComponent,
    KitchenSinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
