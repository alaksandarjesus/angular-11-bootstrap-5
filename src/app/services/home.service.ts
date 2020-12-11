import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  bestSellers(){
    return this.http.get('./assets/api/best-sellers.json');
  }
  items(){
    return this.http.get('./assets/api/items.json');
  }
  stories(){
    return this.http.get('./assets/api/stories.json');
  }
}
