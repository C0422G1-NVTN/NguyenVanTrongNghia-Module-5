import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Register} from "../register";

let id = 2;

@Component({
  selector: 'app-form-angular',
  templateUrl: './form-angular.component.html',
  styleUrls: ['./form-angular.component.css']
})
export class FormAngularComponent implements OnInit {

  userFormReactive: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, this.regexAge]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
  }, this.validatorConfirmPassword);
  register: Register;
  registers: Register[] = [
    {
      id: 1,
      email: 'nghianf@gmail.com',
      password: '2011',
      confirmPassword: '2011',
      country: 'VN',
      age: '1998/11/20',
      gender: true,
      phone: '0764052051'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    this.register = this.userFormReactive.value;
    this.register.id = id++;
    this.registers.push(this.register);
    console.log(this.registers);
  }

  createUserFormReactive() {
    console.log(this.userFormReactive)
  }

  validatorConfirmPassword(control: AbstractControl): ValidationErrors | null {
    const confirmPassword = control.value.confirmPassword;
    const password = control.value.password;
    if (confirmPassword !== password) {
      return {confirmPassword: true};
    }
    return null;
  }


  private regexAge(control: AbstractControl): ValidationErrors | null {
    const a = control.value;
    let current = new Date().getFullYear();
    let birthday = new Date(a).getFullYear();
    let age = current - birthday;
    if (isNaN(age)) {
      return {'ageFalse': true}
    }
    if (age < 18) {
      return {'ageFalse': true}
    }
    return null;
  }
}
