
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharePopupComponent } from './share-popup.component';

export const sharePopupRoutes: Routes = [
  { path: 'share-popup', component: SharePopupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(sharePopupRoutes)],
  exports: [RouterModule]
})
export class SharedPopupRoutingModule { }
