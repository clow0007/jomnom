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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxWheelModule } from 'ngx-wheel';
import { HttpClientModule } from '@angular/common/http';
import { FoodChallengeComponent } from './food-challenge/food-challenge.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



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
    RestaurantReviewComponent,
    FoodChallengeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxWheelModule,
    HttpClientModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
