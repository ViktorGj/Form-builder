import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { dashboardRoute } from './dashboard/dashboard-routing.module';
import { dragRoutes } from './drag-and-drop/drag-and-drop-routing.module';

export const SECURE_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  ...dashboardRoute,
  ...dragRoutes
];

@NgModule({
  imports: [RouterModule.forChild(SECURE_ROUTES)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
