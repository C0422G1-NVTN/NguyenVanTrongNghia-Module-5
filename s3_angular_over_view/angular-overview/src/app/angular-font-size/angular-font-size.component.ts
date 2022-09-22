import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-font-size',
  templateUrl: './angular-font-size.component.html',
  styleUrls: ['./angular-font-size.component.css']
})
export class AngularFontSizeComponent implements OnInit {
  fontSize = 14;
  constructor() { }

  ngOnInit(): void {
  }

}
