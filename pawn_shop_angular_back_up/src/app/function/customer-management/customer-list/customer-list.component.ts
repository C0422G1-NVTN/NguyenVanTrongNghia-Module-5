import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerPage: any;
  name: string = "";
  page: number;
  totalPage: number = 0;
  pageSelect: number[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.searchNameCustomer();
  }

  searchNameCustomer() {
    this.page = 0;
    this.customerService.getAllCustomer(this.name, this.page).subscribe(customer =>{
      if (customer == null){
        this.customerPage = [];
      }else {
        this.pageSelect = [];
        this.customerPage = customer.content;
        this.totalPage = customer.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  previous() {
    this.page = this.page - 1;
    this.customerService.getAllCustomer(this.name, this.page).subscribe(customer =>{
      if (customer == null){
        this.customerPage = [];
      }else {
        this.pageSelect = [];
        this.customerPage = customer.content;
        this.totalPage = customer.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  next() {
    this.page = this.page + 1;
    this.customerService.getAllCustomer(this.name, this.page).subscribe(customer =>{
      if (customer == null){
        this.customerPage = [];
      }else {
        this.pageSelect = [];
        this.customerPage = customer.content;
        this.totalPage = customer.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }

  changePage(pageNow: number) {
    this.page = pageNow;
    this.customerService.getAllCustomer(this.name, this.page).subscribe(customer =>{
      if (customer == null){
        this.customerPage = [];
      }else {
        this.pageSelect = [];
        this.customerPage = customer.content;
        this.totalPage = customer.totalPages;
        for (let i = 0; i < this.totalPage; i++) {
          this.pageSelect.push(i);
        }
      }
    });
  }
}
