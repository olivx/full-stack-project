import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { AppRoutingModule } from './app-routing.module';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantComponent } from './restaurantes/restaurant/restaurant.component';
import { RestaurantServices } from './restaurantes/restaurants.services';
import { RestaurantDetailComponent } from './restaurantes/restaurant-detail/restaurant-detail.component';
import { ShoppingCartComponent } from './restaurantes/restaurant-detail/shopping-cart/shopping-cart.component';
import { RestaurantMenuComponent } from './restaurantes/restaurant-detail/restaurant-menu/restaurant-menu.component';
import { RestaurantMenuItemComponent } from './restaurantes/restaurant-detail/restaurant-menu-item/restaurant-menu-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    ShoppingCartComponent,
    RestaurantMenuComponent,
    RestaurantMenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [RestaurantServices],
  bootstrap: [AppComponent]
})
export class AppModule { }