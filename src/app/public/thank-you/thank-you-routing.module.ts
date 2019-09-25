import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankYouComponent } from './thank-you.component';
import { UserGuard } from '../../services/user.guard';

export const thankRoute: Routes = [
  { path: 'finished', component: ThankYouComponent, canActivate:[UserGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(thankRoute)],
  exports: [RouterModule]
})
export class ThankYouRoutingModule { }
