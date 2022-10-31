import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private URL_CAR =  'http://localhost:8080/carRest'
  constructor(private http: HttpClient) { }
  getALlCar(): Observable<Car[]> {
    return this.http.get<Car[]>(this.URL_CAR)
  }
}
