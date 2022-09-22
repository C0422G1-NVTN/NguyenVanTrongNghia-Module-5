import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calcuator',
  templateUrl: './calcuator.component.html',
  styleUrls: ['./calcuator.component.css']
})
export class CalcuatorComponent implements OnInit {

  number1: number;
  number2: number;
  operator: string;
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }


  calculation() {
    this.result = eval(this.number1 + this.operator + this.number2);
  }
}
