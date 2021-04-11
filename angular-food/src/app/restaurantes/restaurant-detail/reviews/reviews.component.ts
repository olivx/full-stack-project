import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantServices } from '../../restaurants.services';

@Component({
  selector: 'food-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {

  constructor(private RestaurantService: RestaurantServices, private route: ActivatedRoute) { }

  reviews!: Observable<any>
  ngOnInit(): void {
    this.reviews =  this.RestaurantService.reviewsOfRestaurants(this.route.parent?.snapshot.params['id'])
  }

}
