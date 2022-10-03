import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL_CUSTOMER = 'http://localhost:3000/customer'
  constructor(private http: HttpClient) {
  }
  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL_CUSTOMER)
  }

  saveCustomer(customer):Observable<Customer> {
    return this.http.post<Customer>(this.URL_CUSTOMER,customer)
  }

  findById(id: number):Observable<Customer> {
    return this.http.get<Customer>(this.URL_CUSTOMER + '/' + id)
  }

  editCustomer(customer){
    return this.http.patch(this.URL_CUSTOMER + '/' + customer.id,customer);
  }

  removeCustomer(id: any):Observable<Customer> {
    return this.http.delete<Customer>(this.URL_CUSTOMER + '/' + id);
  }
}
