import { Injectable } from '@angular/core';

import { Restaurant } from '../interface/restaurant';
import { RESTAURANTS } from '../mock-data/mock-restaurants';

import { Observable, of } from 'rxjs';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private searchService: SearchService) { }

  getRestaurants(): Observable<Restaurant[]> {
    const restaurants = of(RESTAURANTS);
    return restaurants;
  }

  chooseRestaurant(restaurant: Restaurant): void {
    alert("Chosen: " + restaurant.name + " " + this.searchService.getSearchData());
  }
}
