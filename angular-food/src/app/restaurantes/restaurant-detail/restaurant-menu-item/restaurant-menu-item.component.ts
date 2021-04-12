import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'food-restaurant-menu-item',
  templateUrl: './restaurant-menu-item.component.html',
})
export class RestaurantMenuItemComponent implements OnInit {

  constructor() { }

  @Input() menuItem!: MenuItem
  @Output() addMenuItem = new EventEmitter()
  

  ngOnInit(): void {
  }

  handleMenuItem(){
    this.addMenuItem.emit(this.menuItem)
  }

}
