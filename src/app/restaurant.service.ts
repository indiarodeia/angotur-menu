import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiKey = '93388c06-a8f5-4e5f-873c-1db6d41a7564';
  private apiUrl = 'https://angoturfood.com/rest/api/Categories/Restaurant/';

  constructor(private http: HttpClient) { }

  getRestaurantData(restaurantId: number, isDefaultLanguage: boolean) {
    const headers = new HttpHeaders({
      'ApiKey': this.apiKey,
    });
    const url = `${this.apiUrl}${restaurantId}/${isDefaultLanguage}`;
    return this.http.get(url, { headers });
  }


  isDefaultLanguage(defaultLanguage: boolean) {
    if (defaultLanguage) {
      console.log('is default language: ' + true);
      return true;
    } else {
      console.log('is default language: ' + false);
      return false;
    }
  }
}
