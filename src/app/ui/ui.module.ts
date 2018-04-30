import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [ ToolbarComponent
    , UserLoginComponent
    , UserProfileComponent
    , UserFormComponent
    , NotificationMessageComponent
  ]
  , exports:[ToolbarComponent,
    
    UserProfileComponent,
    NotificationMessageComponent]
  , providers: []
})
export class UiModule { }
