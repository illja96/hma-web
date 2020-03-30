import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthLogoutComponent } from './auth-logout/auth-logout.component';

const routes: Routes = [
  { path: 'auth/login', pathMatch: 'full', component: AuthLoginComponent },
  { path: 'auth/logout', pathMatch: 'full', component: AuthLogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
