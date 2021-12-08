import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Restaurant } from '../../interface/restaurant';

import { RestaurantService } from '../../services/restaurant.service';
import { SearchService } from '../../services/search.service';

import { Category } from '../../interface/category';
import { CATEGORIES } from '../../mock-data/mock-category';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  restaurants: Restaurant[] = [];
  categories = CATEGORIES;
  searchTerm: string = '';

  constructor(private restaurantService: RestaurantService, public searchService: SearchService) {
   }

  ngOnInit(): void {
    this.getRestaurants();
  }

  // // Search result of user's input
  // search(name: string): void {
  //   name = name.trim();
  //   this.searchService.setSearchData(name);
  //   alert(name);
  // }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  submitFilter(name: string): void {
    this.searchTerm = name;
  }

  // Category searching
  clickCategory(category: Category) {
    this.searchTerm = category.name;
  }
}
