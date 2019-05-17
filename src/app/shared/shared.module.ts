import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { SavePopUpModule } from './save-pop-up/save-pop-up.module';
import { SharePopUpModule } from './share-pop-up/share-pop-up.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PageWrapperComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharePopUpModule,
    SavePopUpModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    FormsModule,
    SharePopUpModule,
    SavePopUpModule
  ]
})
export class SharedModule { }
