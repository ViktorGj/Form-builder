import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenSinkComponent } from './components/kitchen-sink/kitchen-sink.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SECURE_ROUTES } from './private/private-routing.module';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';
import { PUBLIC_ROUTES } from './public/public-routing.module';
import { AuthGuard } from './services/auth.guard';



const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
  { path: '', component: PrivateComponent, children: SECURE_ROUTES, canActivate: [ AuthGuard ]},
  { path: 'sink', component: KitchenSinkComponent },
  { path: 'PageNotFound' , component: PageNotFoundComponent },
  { path: '**', redirectTo: 'PageNotFound'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
