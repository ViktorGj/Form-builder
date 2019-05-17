import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes } from './public/login/login-routing.module';
import { dashboardRoute } from './private/dashboard/dashboard-routing.module';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';
import { userLayoutRoutes } from './public/user-layout/user-layout-routing.module';

const routes: Routes = [
  { path: 'sink', component: KitchenSinkComponent },
  ...dashboardRoute,
  ...userLayoutRoutes,
  ...loginRoutes

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
