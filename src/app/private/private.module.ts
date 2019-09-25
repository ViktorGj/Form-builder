import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DragDropViewModule } from './drag-drop-view/drag-drop.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    PrivateComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    DashboardModule,
    DragDropViewModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
    ]
})
export class PrivateModule { }
