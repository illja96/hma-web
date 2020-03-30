import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
