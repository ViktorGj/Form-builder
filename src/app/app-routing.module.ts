import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { dashboardRoute } from './private/dashboard/dashboard-routing.module';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';
import { userLayoutRoutes } from './public/user-layout/user-layout-routing.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sink', component: KitchenSinkComponent },
  ...dashboardRoute,
  ...userLayoutRoutes

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
