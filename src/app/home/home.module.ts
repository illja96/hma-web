import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { HomeNotFoundComponent } from './home-not-found/home-not-found.component';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeAboutComponent } from './home-about/home-about.component';

@NgModule({
  declarations: [
    HomeAboutComponent,
    HomeIndexComponent,
    HomeNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
