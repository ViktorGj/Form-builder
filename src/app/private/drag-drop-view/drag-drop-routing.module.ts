import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragDropComponent } from './drag-drop.component';

export const dragDrop: Routes = [
  { path: 'form-build', component: DragDropComponent },
  { path: 'form-build/:formId', component: DragDropComponent }
];

@NgModule({
  imports: [RouterModule.forChild(dragDrop)],
  exports: [RouterModule]
})
export class DragDropRoutingModule { }
