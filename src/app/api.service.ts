import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  fetchNearby(lat: any, lng: any) {
    return this.http.get<any>('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+ lat + '%2C' + lng + '&radius=5000&type=restaurant&key=AIzaSyCoSFNTdeXqd-wT_C-inHNXINglO6fzw-s');
  }
}
