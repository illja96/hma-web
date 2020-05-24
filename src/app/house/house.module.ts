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

@NgModule({
  declarations: [
    HouseCreateModalComponent,
    HouseDeleteOrLeaveModalComponent,
    HouseIndexComponent,
    HouseIndexCardComponent,
    HouseInfoComponent
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
