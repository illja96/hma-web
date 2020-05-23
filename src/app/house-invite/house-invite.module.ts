import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HouseInviteCreationModalComponent } from './house-invite-creation-modal/house-invite-creation-modal.component';
import { HouseInviteService } from 'src/services/house-invite/house-invite.service';
import { HouseInviteNotificationsComponent } from './house-invite-notifications/house-invite-notifications.component';

@NgModule({
  declarations: [
    HouseInviteCreationModalComponent,
    HouseInviteNotificationsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    HouseInviteNotificationsComponent
  ],
  providers: [
    HouseInviteService
  ]
})
export class HouseInviteModule { }
