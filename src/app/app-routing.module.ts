import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'questionnaire', component: QuestionnaireComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
