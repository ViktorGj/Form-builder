import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedViewComponent } from './shared-view.component';

export const sharedRouts: Routes = [
  { path: 'shared' , component: SharedViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(sharedRouts)],
  exports: [RouterModule]
})
export class SharedViewRoutingModule { }
