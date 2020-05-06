import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseIndexComponent } from './house-index/house-index.component';
import { HouseInfoComponent } from './house-info/house-info.component';

const routes: Routes = [
  { path: 'houses', pathMatch: 'full', component: HouseIndexComponent },
  { path: 'houses/:houseId', pathMatch: 'full', component: HouseInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
