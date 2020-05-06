import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HouseRoutingModule } from './house-routing.module';
import { HouseService } from 'src/services/house/house.service';
import { HouseIndexComponent } from './house-index/house-index.component';
import { HouseIndexCardComponent } from './house-index-card/house-index-card.component';
import { HouseInfoComponent } from './house-info/house-info.component';

@NgModule({
  declarations: [
    HouseIndexComponent,
    HouseIndexCardComponent,
    HouseInfoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    HouseRoutingModule
  ],
  providers: [
    HouseService
  ]
})
export class HouseModule { }
