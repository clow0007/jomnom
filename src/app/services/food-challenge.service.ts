import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FoodChallenge } from '../interface/food-challenge';
import { FOODCHALLENGES } from '../mock-data/food-challenges';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FoodChallengeService {

  constructor() { }

  getFoodChallenges(): Observable<FoodChallenge[]> {
    const foodChallenges = of(FOODCHALLENGES);
    return foodChallenges;
  }

  chooseChallenge(foodChallenge: FoodChallenge): void{
    console.log(foodChallenge.description)
    Swal.fire({
      title: '<strong>Food Challenge Detail</strong>',
      icon: 'info',
      html:
        '<p><b>' + foodChallenge.description + '</b></p> <p>*' + foodChallenge.details + '</p>',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        'Accept',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Accepted',
          'You have chosen this challenge.',
          'success'
        )
      } 
    })
    
  }

}
