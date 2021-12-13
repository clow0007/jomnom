import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../interface/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-food-challenge',
  templateUrl: './food-challenge.component.html',
  styleUrls: ['./food-challenge.component.css']
})
export class FoodChallengeComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  chooseChallenge(): void{
    Swal.fire({
      title: '<strong>Food Challenge Detail</strong>',
      icon: 'info',
      html:
        '<p><b>Collect 10 stamps to get 100 reward points\n </b></p> <p>*Spend RM20 to get one stamp</p>',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        'Accept',
      // confirmButtonAriaLabel: 'Thumbs up, great!',
      // cancelButtonText:
      //   'Decline',
      // cancelButtonAriaLabel: 'Thumbs down'
    })
    
  }



}
