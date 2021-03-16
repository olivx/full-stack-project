import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantServices } from './restaurants.services';

@Component({
  selector: 'food-restaurantes',
  templateUrl: './restaurantes.component.html',
})
export class RestaurantesComponent implements OnInit {

  constructor(private RestaurantServices: RestaurantServices) { }

  
  restaurants: Restaurant[] = []
  
  ngOnInit(): void {
    this.RestaurantServices.restaurants().subscribe(restaurants => {
      this.restaurants = restaurants
    })
  }

}
