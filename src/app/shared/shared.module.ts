import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { SavePopUpModule } from './save-pop-up/save-pop-up.module';
import { SharePopUpModule } from './share-pop-up/share-pop-up.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderModule } from './header/header.module';
// import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PageWrapperComponent,
    PageNotFoundComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    SharePopUpModule,
    SavePopUpModule,
    RouterModule,
    HeaderModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    SharePopUpModule,
    SavePopUpModule,
    // HeaderComponent,
    HeaderModule
  ]
})
export class SharedModule { }
