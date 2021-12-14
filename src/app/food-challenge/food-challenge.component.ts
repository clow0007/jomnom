import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../interface/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import Swal from 'sweetalert2';
import { FoodChallenge } from '../interface/food-challenge';
import { FoodChallengeService } from '../services/food-challenge.service';

@Component({
  selector: 'app-food-challenge',
  templateUrl: './food-challenge.component.html',
  styleUrls: ['./food-challenge.component.css']
})
export class FoodChallengeComponent implements OnInit {
  restaurants: Restaurant[] = [];
  foodChallenges: FoodChallenge[] = [];

  constructor(private restaurantService: RestaurantService, private foodChallengeService: FoodChallengeService) { }

  ngOnInit(): void {
    // this.getRestaurants();
    this.getFoodChallenges();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  getFoodChallenges(): void {
    this.foodChallengeService.getFoodChallenges()
      .subscribe(foodchallenges => this.foodChallenges = foodchallenges);
  }

}
