import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HouseCar} from "../model/housecar";

@Injectable({
  providedIn: 'root'
})
export class HouseCarService {
  private URL_HOUSE_CAR = 'http://localhost:8080/houseCarRest'
  constructor(private http: HttpClient) { }
  getAllUser(name: string, page: number): Observable<HouseCar[]> {
    return this.http.get<HouseCar[]>(this.URL_HOUSE_CAR + "?page=" + page + "&nameHouseCar=" + name)
  }



  findById(id: number):Observable<HouseCar> {
    return this.http.get<HouseCar>(this.URL_HOUSE_CAR + '/' + id)
  }

  editHouseCar(houseCar){
    return this.http.patch(this.URL_HOUSE_CAR + '/' ,houseCar);
  }

  removeHouseCar(id: any):Observable<HouseCar> {
    console.log(id)
    return this.http.delete<HouseCar>(this.URL_HOUSE_CAR + '/' + id);
  }

  saveHouseCar(houseCar: HouseCar):Observable<HouseCar>{
    return this.http.post<HouseCar>(this.URL_HOUSE_CAR,houseCar)
  }
}
