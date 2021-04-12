import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators'
import { BASE_URL_API } from "../app.api";
import { ErrorHandler } from "../app.error-handler";
import { MenuItem } from "./restaurant-detail/restaurant-menu-item/menu-item.model";
import { Restaurant } from "./restaurant/restaurant.model";


@Injectable()
export class RestaurantServices {

  constructor(private http: HttpClient) { }

  errorMessage: String = ``

  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${BASE_URL_API}restaurants`)
      .pipe(
        catchError(ErrorHandler.handlerError)
      )
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${BASE_URL_API}restaurants/${id}`)
      .pipe(
        catchError(ErrorHandler.handlerError)
      )
  }

  reviewsOfRestaurants(id: String): Observable<any> {
    return this.http.get<any>(`${BASE_URL_API}restaurants/${id}/reviews`)
      .pipe(
        catchError(ErrorHandler.handlerError)
      )
  }

  menuOfRestaurants(id: String): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${BASE_URL_API}restaurants/${id}/menu`)
      .pipe(
        catchError(ErrorHandler.handlerError)
      )
  }

}