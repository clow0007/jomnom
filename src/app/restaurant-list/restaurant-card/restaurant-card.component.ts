import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Restaurant } from '../../interface/restaurant';

import { RestaurantService } from '../../services/restaurant.service';
import { SearchService } from '../../services/search.service';

import { Category } from '../../interface/category';
import { CATEGORIES } from '../../mock-data/mock-category';
import { Router } from '@angular/router';
import { NgxWheelComponent } from 'ngx-wheel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  restaurants: Restaurant[] = [];
  categories = CATEGORIES;
  searchTerm: string = '';

  constructor(private restaurantService: RestaurantService, public searchService: SearchService, private router: Router) {
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

  navigate(){
    this.router.navigate(['food-challenge']);  // define your component where you want to go
  }

  // Open raffle
  openRaffle() {
    Swal.fire({
      title: "<strong>Raffle</strong>",
      icon: 'info',
      html:
        "<ngx-wheel #wheel " +
        "width='300' height='300' spinDuration='8' [disableSpinOnClick]='true' [items]='items' [innerRadius]='50' " +
        "[spinAmount]='10' pointerStrokeColor='red' pointerFillColor='purple' [idToLandOn]='idToLandOn'" + 
        "(onSpinStart)='before()' (onSpinComplete)='after()'></ngx-wheel>" +
        "<div><button (click)='wheel.spin()'>Raffle it!</button>" +
        "<button (click)='[resetButton().wheel.reset()'>Reset</button></div>",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
    })
  }


  items = [
    {id: 1, text: 'Prize 1'},
    {id: 2, text: 'Prize 2'},
    {id: 3, text: 'Prize 3'}
  ]

  idToLandOn = Math.floor(Math.random() * this.items.length + 1);
  // Before raffle
  before() {
    console.log(this.idToLandOn);
    console.log("before")
  }

  // After raffle
  after() {
    console.log("after")
    
    Swal.fire({
      title: 'Raffle Result',
      text: this.items[this.idToLandOn-1].text,
      icon: 'success',
      confirmButtonColor: 'Cool'
    })
  }

  // Reset button which also resets idToLandOn
  resetButton() {
    this.idToLandOn = Math.floor(Math.random() * this.items.length + 1);
  }
}
