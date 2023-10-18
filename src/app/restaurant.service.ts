import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';

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
  private apiEndpoint = 'https://angoturfood.com/rest/';

  constructor(private http: HttpClient) { }

  getRestaurantData(): Observable<any> {
    const headers = new HttpHeaders({
      'apikey': this.apikey,
    });
    const url = `${this.apiUrl}api/Restaurants/`;
    return this.http.get(url, { headers });
  }

  getRestaurantMenu(restaurantId: number): Observable<any> {
    const headers = new HttpHeaders({
      'apikey': this.apikey,
    });
    const url = `${this.apiUrl}api/Products/Restaurant/${restaurantId}/${this.isDefaultLanguage}`;
    return this.http.get(url, { headers });
  }

  getRestaurantDailyMeals() {
    const headers = new HttpHeaders({
      'apikey': this.apikey,
    });
    const url = `${this.apiUrl}api/DailyMeals/Restaurant/${this.restaurantId}/${this.isDefaultLanguage}`;
    return this.http.get(url, { headers });
  }

  /*   changeDefaultLanguage() {
      this.isDefaultLanguage = !this.isDefaultLanguage;
    }; */


}


// Modify this method to save a favorite restaurant for a user
/*  saveUserFavorite(userId: number, restaurantId: number): Observable<boolean> {
   const headers = new HttpHeaders({
     'Apikey': this.apiKey,
   });
   const url = `${this.apiUrl}api/SaveFavorite/${userId}/${restaurantId}`;

   // You can send data in the request body if needed
   const data = {}; // Modify this to send any data required

   return this.http.post<boolean>(url, data, { headers })
     .pipe(retry(1), catchError(this.errorHand1));
 } */

// Handle errors as needed
/*   private errorHand1(error: any) {
    // You can implement error handling logic here
    console.error('An error occurred:', error);
    throw error; // Rethrow the error or handle it as needed
  } */

// Handle errors as needed


/*   getRestaurantData(restaurantId: number, isDefaultLanguage: boolean) {
    const headers = new HttpHeaders({
      'ApiKey': this.apiKey,
    });
    const url = `${this.apiUrl}${restaurantId}/${isDefaultLanguage}`;
    return this.http.get(url, { headers });
  } */

/* function refreshHttpOptions() {
  return new Promise((resolve, reject) => {
    let headers: HttpHeaders = new HttpHeaders()
      .set("Content-Type", "applicatio/json")
      .set("Apikey", '93388c06-a8f5-4e5f-873c-1db6d41a7564');
    )
};

 */

