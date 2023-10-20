import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  /* ID RESTAURANTES:
  ALTO SE: 1,
  LUME: 2  */

  public isDefaultLanguage: boolean = true;
  public restaurantId!: number;

  public apikey = '93388c06-a8f5-4e5f-873c-1db6d41a7564';
  public apiUrl = 'https://angoturfood.com/rest/';


  constructor(private http: HttpClient) { }


  getRestaurantData(): Observable<any> {
    const headers = new HttpHeaders({
      'apikey': this.apikey,
    });
    const url = `${this.apiUrl}api/Restaurants/`;
    return this.http.get(url, { headers });
  }

  getRestaurantMenu(): Observable<any> {
    const headers = new HttpHeaders({
      'apikey': this.apikey,
    });
    const url = `${this.apiUrl}api/Categories/Restaurant/${this.restaurantId}/${this.isDefaultLanguage}`;
    return this.http.get(url, { headers });
  }

  getRestaurantDailyMeals() {
    const headers = new HttpHeaders({
      'apikey': this.apikey,
    });
    const url = `${this.apiUrl}api/DailyMeals/Restaurant/${this.restaurantId}/${this.isDefaultLanguage}`;
    return this.http.get(url, { headers });
  }

  // Create a subject to notify subscribers of language changes
  private languageSubject = new Subject<string>();
  language$ = this.languageSubject.asObservable();

  selectLanguage(language: string) {
    if (language === 'pt') {
      this.isDefaultLanguage = true;
    } else {
      this.isDefaultLanguage = false;
    }

    // Notify subscribers (e.g., menu component) about the language change
    this.languageSubject.next(language);
  }

}