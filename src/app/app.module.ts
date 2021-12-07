import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantCardComponent } from './restaurant-list/restaurant-card/restaurant-card.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MainComponent } from './main/main.component';
import { RestaurantOverviewComponent } from './restaurant-overview/restaurant-overview.component';
import { RestaurantReviewComponent } from './restaurant-review/restaurant-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    RestaurantListComponent,
    RestaurantCardComponent,
    CategoryListComponent,
    MainComponent,
    RestaurantOverviewComponent,
    RestaurantReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
