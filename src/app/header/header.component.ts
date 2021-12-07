import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Search result of user's input
  search(name: string): void {
    name = name.trim();
    alert(name);
  }

  // Route to home page
  goToHome(): void {
    alert("Return to home page");
  }
}
