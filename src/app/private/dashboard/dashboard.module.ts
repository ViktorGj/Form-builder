import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedViewComponent } from './shared-view/shared-view.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DraftViewComponent } from './draft-view/draft-view.component';
import { UsersReviewComponent } from './users-review/users-review.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SubHeaderModule } from './sub-header/sub-header.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SharedViewComponent,
    DraftViewComponent,
    UsersReviewComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
    SubHeaderModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    SubHeaderModule
  ]
})
export class DashboardModule { }
