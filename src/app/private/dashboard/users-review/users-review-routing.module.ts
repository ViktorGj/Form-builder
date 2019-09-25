import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersReviewComponent } from './users-review.component';

export const reviewRoutes: Routes = [
  { path: 'review/:submissionId/:formId', component: UsersReviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(reviewRoutes)],
  exports: [RouterModule]
})
export class UsersReviewRoutingModule { }
