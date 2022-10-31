import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";
import {Trip} from "../model/trip";

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private URL_TRIP =  'http://localhost:8080/tripRest'
  constructor(private http: HttpClient) {}
  getALlTrip(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.URL_TRIP)
  }
}
