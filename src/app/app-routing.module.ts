import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodChallengeComponent } from './food-challenge/food-challenge.component';
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  { path: 'food-challenge', component:FoodChallengeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
