import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeAboutComponent } from './home-about/home-about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeIndexComponent },
  { path: 'about', pathMatch: 'full', component: HomeAboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
