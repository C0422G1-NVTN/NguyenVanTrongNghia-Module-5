import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from "../irating-unit";

@Component({
  selector: 'app-raiting-bar-component',
  templateUrl: './raiting-bar-component.component.html',
  styleUrls: ['./raiting-bar-component.component.css']
})
export class RaitingBarComponentComponent implements OnInit {
  @Input()
  max = 40;
  @Input()
  ratingValue = 1;
  @Input()
  showRatingValue = true;

  @Output()
  rateChange = new EventEmitter<number>();

  ratingUnits: Array<IRatingUnit> = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }


  select(index) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }
  enter(index) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }
  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }
}
