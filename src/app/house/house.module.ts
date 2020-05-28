import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HouseRoutingModule } from './house-routing.module';
import { HouseService } from 'src/services/house/house.service';
import { HouseCreateModalComponent } from './house-create-modal/house-create-modal.component';
import { HouseDeleteOrLeaveModalComponent } from './house-delete-or-leave-modal/house-delete-or-leave-modal.component';
import { HouseIndexComponent } from './house-index/house-index.component';
import { HouseIndexCardComponent } from './house-index-card/house-index-card.component';
import { HouseInfoComponent } from './house-info/house-info.component';
import { HouseInfoGeneralInfoComponent } from './house-info-general-info/house-info-general-info.component';
import { HouseInfoInviteMemberModalComponent } from './house-info-invite-member-modal/house-info-invite-member-modal.component';
import { HouseInfoMembersComponent } from './house-info-members/house-info-members.component';
import { HouseInfoRemoveMemberModalComponent } from './house-info-remove-member-modal/house-info-remove-member-modal.component';
import { HouseInfoTransactionsComponent } from './house-info-transactions/house-info-transactions.component';

@NgModule({
  declarations: [
    HouseCreateModalComponent,
    HouseDeleteOrLeaveModalComponent,
    HouseIndexComponent,
    HouseIndexCardComponent,
    HouseInfoComponent,
    HouseInfoGeneralInfoComponent,
    HouseInfoInviteMemberModalComponent,
    HouseInfoMembersComponent,
    HouseInfoRemoveMemberModalComponent,
    HouseInfoTransactionsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    HouseRoutingModule
  ],
  providers: [
    HouseService
  ]
})
export class HouseModule { }
