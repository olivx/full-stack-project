import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'food-restaurant-menu-item',
  templateUrl: './restaurant-menu-item.component.html',
})
export class RestaurantMenuItemComponent implements OnInit {

  constructor() { }

  @Input() menuItem!: MenuItem
  

  ngOnInit(): void {
  }

}
