import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantServices } from '../../restaurants.services';
import { MenuItem } from '../restaurant-menu-item/menu-item.model';

@Component({
  selector: 'food-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
})
export class RestaurantMenuComponent implements OnInit {

  constructor(private RestaurantService: RestaurantServices, private route: ActivatedRoute) { }

  menuItems!: Observable<MenuItem[]>
  ngOnInit(): void {
    this.menuItems =  this.RestaurantService.menuOfRestaurants(this.route.parent?.snapshot.params["id"])
  }

}
