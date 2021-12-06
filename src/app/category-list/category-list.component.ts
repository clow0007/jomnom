import { Component, OnInit } from '@angular/core';

import { Category } from '../category';
import { CATEGORIES } from '../mock-category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  // categories: Category[] = [];
  categories = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
