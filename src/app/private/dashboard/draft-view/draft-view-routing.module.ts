import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftViewComponent } from './draft-view.component';

export const draftRoutes: Routes = [
  { path: 'draft', component: DraftViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(draftRoutes)],
  exports: [RouterModule]
})
export class DraftViewRoutingModule { }
