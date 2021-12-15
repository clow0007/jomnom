import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';
import {Router} from "@angular/router";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Swal from "sweetalert2";
import {RESTAURANTS} from "../mock-data/mock-restaurants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  closeResult = '';
  items = RESTAURANTS.map(response => ({id: response.id-1, text: response.name}));
  idToLandOn = Math.floor(Math.random() * this.items.length);

  constructor(public searchService: SearchService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // Search result of user's input
  search(name: string): void {
    name = name.trim();
    this.searchService.setSearchData(name);
    alert(name);
  }

  navigate(){
    this.router.navigate(['food-challenge']);  // define your component where you want to go
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
  }

  // Before raffle
  before() {
  }

  // After raffle
  after() {
    Swal.fire({
      title: 'The restaurant you should go is...',
      text: this.items[this.idToLandOn].text,
      imageUrl: '/assets/images/Logo-Panda.svg',
      imageWidth: 300,
      imageHeight: 100,
      confirmButtonColor: 'Cool'
    })
  }

  // Reset button which also resets idToLandOn
  resetButton(): void {
    this.idToLandOn = Math.floor(Math.random() * this.items.length);
    console.log(this.idToLandOn);
  }
}
