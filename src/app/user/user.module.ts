import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from 'src/services/user/user.service';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserUpdateComponent } from './user-update/user-update.component';

@NgModule({
  declarations: [
    UserDeleteComponent,
    UserIndexComponent,
    UserRegisterComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    UserRoutingModule
  ],
  exports: [
    UserDeleteComponent,
    UserRegisterComponent,
    UserUpdateComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
