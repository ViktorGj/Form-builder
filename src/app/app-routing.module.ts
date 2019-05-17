import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes } from './public/login/login-routing.module';
import { dashboardRoute } from './private/dashboard/dashboard-routing.module';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { userLayoutRoutes } from './public/user-layout/user-layout-routing.module';

const routes: Routes = [
  { path: 'sink', component: KitchenSinkComponent },
  ...dashboardRoute,
  ...userLayoutRoutes,
  ...loginRoutes,
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
