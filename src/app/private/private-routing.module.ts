import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { dashboardRoute } from './dashboard/dashboard-routing.module';
import { dragDrop } from './drag-drop-view/drag-drop-routing.module';

export const SECURE_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  ...dashboardRoute,
  ...dragDrop
];

@NgModule({
  imports: [RouterModule.forChild(SECURE_ROUTES)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
