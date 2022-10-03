import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
private URL_CUSTOMER_TYPE =  'http://localhost:3000/customerType'
  constructor(private http: HttpClient) { }

  getALlCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.URL_CUSTOMER_TYPE)
  }
}
