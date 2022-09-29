import { Component, OnInit } from '@angular/core';
import {Login} from "./login";
import {FormControl, FormGroup, Validators} from "@angular/forms";

let id = 2;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  logins: Login[] = [
    {
      id: 1,
      email: 'Hunghamhut@gmail.com',
      password: '123456'
    }
  ]
  login: Login;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.login = this.loginForm.value;
    this.login.id = id++;
    this.logins.push(this.login);
    console.log(this.logins);
  }

}
