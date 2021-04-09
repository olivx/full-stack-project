import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailComponent } from './restaurantes/restaurant-detail/restaurant-detail.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  {path: 'restaurant-detail/:id', component: RestaurantDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, 
  AboutComponent
]
