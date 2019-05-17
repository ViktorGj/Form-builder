import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop.component';
import { AuthGuard } from 'src/app/services/auth.guard';

const dragRoutes: Routes = [
    { path: 'builder', component: DragAndDropComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(dragRoutes)],
  exports: [RouterModule]
})
export class DragAndDropRoutingModule { }