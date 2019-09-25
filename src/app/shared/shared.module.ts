import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderModule } from './header/header.module';
import { SharePopupComponent } from './share-popup/share-popup.component';
import { SharedPopupRoutingModule } from './share-popup/share-popup-routing.module';
import { SavePopupComponent } from './save-popup/save-popup.component';
import { FormsModule } from '@angular/forms';
import { SessionPopupComponent } from './session-popup/session-popup.component';
import { SubmitPopupComponent } from './submit-popup/submit-popup.component';
import { ShareWarningModalComponent } from './share-warning-modal/share-warning-modal.component';
import { SaveOnSharePopupComponent } from './save-on-share-popup/save-on-share-popup.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SharePopupComponent,
    SavePopupComponent,
    SessionPopupComponent,
    SubmitPopupComponent,
    ShareWarningModalComponent,
    SaveOnSharePopupComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SharedPopupRoutingModule,
    HeaderModule,
    FormsModule,
    SidebarModule,
    PageModule
  ],
  exports: [
    HeaderModule,
    SidebarModule,
    PageModule
  ],
  entryComponents: [
    SharePopupComponent,
    SavePopupComponent,
    SessionPopupComponent,
    SubmitPopupComponent,
    ShareWarningModalComponent,
    SaveOnSharePopupComponent
  ],
})
export class SharedModule { }
