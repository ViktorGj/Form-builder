import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './user-layout.component';

export const userLayoutRoutes: Routes = [
  {path: 'user', component: UserLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(userLayoutRoutes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
