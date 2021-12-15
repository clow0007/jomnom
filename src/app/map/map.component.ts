import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;
  infoWindow: google.maps.InfoWindow
  position: any = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          this.position = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // this.apiService.fetchNearby(this.position.lat, this.position.lng).
          // subscribe(response =>{
          //   console.log(response);
          // });
          this.infoWindow.setPosition(this.position);
          this.infoWindow.setContent("Location found.");
          this.infoWindow.open(this.map);
          this.map.setCenter(this.position);
        },
        () => {
          this.handleLocationError(true, this.infoWindow, this.map.getCenter()!);
        }
      );
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, this.infoWindow, this.map.getCenter()!);
    }


  }



  handleLocationError(
    browserHasGeolocation: boolean,
    infoWindow: google.maps.InfoWindow,
    pos: google.maps.LatLng
  ) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(this.map);
  }

}
