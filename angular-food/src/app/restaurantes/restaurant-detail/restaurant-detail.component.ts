import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant/restaurant.model';
import { RestaurantServices } from '../restaurants.services';

@Component({
  selector: 'food-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private RestaurantServices: RestaurantServices, private route: ActivatedRoute) { }

  restaurant!: Restaurant
  id!: string
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.RestaurantServices.restaurantById(this.id)
        .subscribe(restaurant => this.restaurant = restaurant)
  }

}
