import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNotFoundComponent } from './home/home-not-found/home-not-found.component';

const routes: Routes = [
  { path: '**', component: HomeNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
