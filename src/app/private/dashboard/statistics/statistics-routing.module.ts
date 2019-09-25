import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics.component';

export const statisticRoutes: Routes = [
  { path: 'statistics/:id', component: StatisticsComponent,  }
];

@NgModule({
  imports: [RouterModule.forChild(statisticRoutes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
