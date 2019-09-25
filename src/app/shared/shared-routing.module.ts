import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { sharePopupRoutes } from './share-popup/share-popup-routing.module';

export const sharedRoutes: Routes = [
  ...sharePopupRoutes
];

@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
