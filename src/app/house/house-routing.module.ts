import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseIndexComponent } from './house-index/house-index.component';

const routes: Routes = [
  { path: 'houses', pathMatch: 'full', component: HouseIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
