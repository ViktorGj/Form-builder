import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes } from './public/login/login-routing.module';
import { dashboardRoute } from './private/dashboard/dashboard-routing.module';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { userLayoutRoutes } from './public/user-layout/user-layout-routing.module';
import { dragRoutes } from './private/drag-and-drop/drag-and-drop-routing.module';
import { privateRoute } from './private/private-routing.module';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';

// const routes: Routes = [
//   { path: 'sink', component: KitchenSinkComponent },
//   // ...dashboardRoute,
//   ...userLayoutRoutes,
//   ...loginRoutes,
//   // ...dragRoutes,
//   ...privateRoute,
//   { path: 'PageNotFound' , component: PageNotFoundComponent },
//   { path: '**', redirectTo: 'PageNotFound'}
// ];

export const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  ...loginRoutes,
  ...userLayoutRoutes
];

export const SECURE_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  ...dashboardRoute,
  // ...dragRoutes
];

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', },
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
  { path: '', component: PrivateComponent, children: SECURE_ROUTES },
  { path: 'PageNotFound' , component: PageNotFoundComponent },
  { path: '**', redirectTo: 'PageNotFound'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
