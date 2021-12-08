import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchInput: string;

  constructor() { }

  setSearchData(data: string) {
    this.searchInput = data;
  }

  getSearchData(): string {
    return this.searchInput;
  }

  search(name: string): string {
    alert(name);

    return name;
  }
}
