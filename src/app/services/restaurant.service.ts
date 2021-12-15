import { Injectable } from '@angular/core';

import { Restaurant } from '../interface/restaurant';
import { RESTAURANTS } from '../mock-data/mock-restaurants';

import { Observable, of } from 'rxjs';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  getRestaurants(): Observable<Restaurant[]> {
    const restaurants = of(RESTAURANTS);
    return restaurants;
  }

  chooseRestaurant(restaurant: Restaurant): void {
    Swal.fire({
      title: 'Alert',
      text: 'Chosen ' + restaurant.name,
      icon: 'success',
      confirmButtonColor: 'Cool'
    })
  }


}
