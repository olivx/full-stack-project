import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RestaurantDetailComponent } from './restaurantes/restaurant-detail/restaurant-detail.component';
import { RestaurantMenuComponent } from './restaurantes/restaurant-detail/restaurant-menu/restaurant-menu.component';
import { ReviewsComponent } from './restaurantes/restaurant-detail/reviews/reviews.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurantes', component: RestaurantesComponent},
  { 
    path: 'restaurant-detail/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full' },
      {path: 'menu', component: RestaurantMenuComponent},
      {path: 'reviews', component:ReviewsComponent}
    ]   
  }
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
