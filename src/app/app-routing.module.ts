import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { dashboardRoute } from './private/dashboard/dashboard-routing.module';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: LoginComponent ,  pathMatch: 'full' },
  { path: 'sink', component: KitchenSinkComponent },
  ...dashboardRoute,
  { path: 'PageNotFound' , component: PageNotFoundComponent },
  { path: '**', redirectTo: 'PageNotFound'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
