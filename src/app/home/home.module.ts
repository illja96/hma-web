import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeNotFoundComponent } from './home-not-found/home-not-found.component';
import { HomeIndexComponent } from './home-index/home-index.component';

@NgModule({
  declarations: [
    HomeIndexComponent,
    HomeNotFoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeNotFoundComponent
  ]
})
export class HomeModule { }
