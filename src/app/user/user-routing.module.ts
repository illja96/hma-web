import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { SocialLoginGuard } from 'src/guards/social-login/social-login.guard';

const routes: Routes = [
  { path: 'profile', pathMatch: 'full', component: UserIndexComponent, canActivate: [SocialLoginGuard] },
  { path: 'profile/registration', pathMatch: 'full', component: UserRegisterComponent, canActivate: [SocialLoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
