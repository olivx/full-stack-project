import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL_API } from "../app.api";
import { Restaurant } from "./restaurant/restaurant.model";


@Injectable()
export class RestaurantServices{

    constructor(private http: HttpClient){}

    restaurants(): Observable <Restaurant[]>{
        return this.http.get<Restaurant[]>(`${BASE_URL_API}restaurants`)
    }
}