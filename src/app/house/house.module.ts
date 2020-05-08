import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HouseRoutingModule } from './house-routing.module';
import { HouseService } from 'src/services/house/house.service';
import { HouseCreationModalComponent } from './house-creation-modal/house-creation-modal.component';
import { HouseDeletionModalComponent } from './house-deletion-modal/house-deletion-modal.component';
import { HouseIndexComponent } from './house-index/house-index.component';
import { HouseIndexCardComponent } from './house-index-card/house-index-card.component';
import { HouseInfoComponent } from './house-info/house-info.component';

@NgModule({
  declarations: [
    HouseCreationModalComponent,
    HouseDeletionModalComponent,
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
