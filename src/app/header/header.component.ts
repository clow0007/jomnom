import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
  }

  // Search result of user's input
  search(name: string): void {
    name = name.trim();
    this.searchService.setSearchData(name);
    alert(name);
  }

  // Route to home page
  goToHome(): void {
    alert("Return to home page");
  }

  navigate(){
    this.router.navigate(['food-challenge']);  // define your component where you want to go
  }
}
