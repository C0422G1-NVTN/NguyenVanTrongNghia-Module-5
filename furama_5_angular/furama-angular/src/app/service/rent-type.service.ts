import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  private URL_RENT_TYPE = 'http://localhost:3000/rentType';
  constructor(private http: HttpClient) { }

  getAllRentType(): Observable<RentType[]> {
    return this.http.get<RentType[]>(this.URL_RENT_TYPE);
  }
}
