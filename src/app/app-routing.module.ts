import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes } from './public/login/login-routing.module';
import { dashboardRoute } from './private/dashboard/dashboard-routing.module';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';

const routes: Routes = [
  { path: 'sink', component: KitchenSinkComponent },
  ...dashboardRoute,
  ...loginRoutes

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
