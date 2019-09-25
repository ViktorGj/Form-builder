import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { sharedRouts } from './shared-view/shared-view-routing.module';
import { draftRoutes } from './draft-view/draft-view-routing.module';
import { reviewRoutes } from './users-review/users-review-routing.module';
import { statisticRoutes } from './statistics/statistics-routing.module';

export const dashboardRoute: Routes = [
  { path: 'dashboard', redirectTo: 'dashboard/shared', pathMatch: 'full' },
  { path: 'dashboard', children: [
    ...sharedRouts,
    ...draftRoutes,
    ...reviewRoutes,
    ...statisticRoutes
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoute)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
