import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PUBLIC_ROUTES } from './public/public-routing.module';
import { PrivateComponent } from './private/private.component';
import { SECURE_ROUTES } from './private/private-routing.module';
import { AuthGuard } from './services/auth.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { UserLayoutComponent } from './private/user-layout/user-layout.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
  { path: '', component: PrivateComponent, children: SECURE_ROUTES, canActivate:[AdminGuard] },
  { path: 'user-view/:formId/:submissionsId', component: UserLayoutComponent, canActivate:[AuthGuard]},
  { path: 'PageNotFound' , component: PageNotFoundComponent },
  { path: '**', redirectTo: 'PageNotFound'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
