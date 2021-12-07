import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../../restaurant';
import { RESTAURANTS } from '../../mock-restaurants';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  // restaurants: Restaurant[] = [];

  restaurants = RESTAURANTS;

  constructor() { }

  ngOnInit(): void {
  }

  chooseRestaurant(restaurant: Restaurant): void {
    alert("Chosen " + restaurant.name);
  }
}
