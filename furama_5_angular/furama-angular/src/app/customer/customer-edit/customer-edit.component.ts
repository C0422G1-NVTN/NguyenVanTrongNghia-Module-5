import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = {};
  customerForm: FormGroup;
  customerTypeList: CustomerType[] = [];
  id: number;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.customerTypeService.getALlCustomerType().subscribe(data => {
      this.customerTypeList = data;
    });
    this.ngOnInit();

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id')
    })
    this.customerService.findById(this.id).subscribe(data => {
      this.customer = data;
      this.customerForm.patchValue({customerType: this.customer.customerType.id});
      this.customerForm.patchValue(this.customer);
    })
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl(1)
    })
  }

  editCustomer() {
    const customer = this.customerForm.value;
    console.log(customer)
    this.customerService.editCustomer(customer).subscribe(next =>
      this.router.navigateByUrl('/customer'));

  }

  compareCustomerType(type1: CustomerType, type2: CustomerType): boolean {
    return type1.id === type2.id;
  }
}
