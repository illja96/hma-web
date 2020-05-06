import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from 'src/services/user/user.service';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  declarations: [
    UserIndexComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
