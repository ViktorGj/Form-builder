import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes } from './login/login-routing.module';
import { thankRoute } from './thank-you/thank-you-routing.module';
import { sharePopupRoutes } from '../shared/share-popup/share-popup-routing.module';

export const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  ...loginRoutes,
  ...thankRoute,
  ...sharePopupRoutes,
];

@NgModule({
  imports: [RouterModule.forChild(PUBLIC_ROUTES)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
