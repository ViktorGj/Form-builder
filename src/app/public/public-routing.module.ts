import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes } from './login/login-routing.module';
import { userLayoutRoutes } from './user-layout/user-layout-routing.module';

export const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  ...loginRoutes,
  ...userLayoutRoutes
];

@NgModule({
  imports: [RouterModule.forChild(PUBLIC_ROUTES)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
