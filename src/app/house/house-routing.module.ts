import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseIndexComponent } from './house-index/house-index.component';
import { HouseInfoComponent } from './house-info/house-info.component';
import { SocialLoginGuard } from 'src/guards/social-login/social-login.guard';

const routes: Routes = [
  { path: 'houses', pathMatch: 'full', component: HouseIndexComponent, canActivate: [SocialLoginGuard] },
  { path: 'houses/:houseId', pathMatch: 'full', component: HouseInfoComponent, canActivate: [SocialLoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
