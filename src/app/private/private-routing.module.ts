import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { PrivateComponent } from './private.component';
import { dashboardRoute } from './dashboard/dashboard-routing.module';
import { dragRoutes } from './drag-and-drop/drag-and-drop-routing.module';

export const privateRoute: Routes = [
  {path: '', component: PrivateComponent, children: [
    ...dashboardRoute,
    ...dragRoutes,
    // {path: 'drag', component: DragAndDropComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(privateRoute)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
