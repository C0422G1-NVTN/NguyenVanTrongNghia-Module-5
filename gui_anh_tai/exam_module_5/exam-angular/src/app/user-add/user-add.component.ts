import { Component, OnInit } from '@angular/core';
import {Car} from "../model/car";
import {FormControl, FormGroup} from "@angular/forms";
import {HouseCarService} from "../service/housecar.service";
import {Router} from "@angular/router";
import {CarService} from "../service/car.service";
import {Trip} from "../model/trip";
import {TripService} from "../service/trip.service";
import {HouseCar} from "../model/housecar";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  carList: Car[] = [];
  tripList: Trip[] = [];
  houseCar: HouseCar;

  houseCarForm: FormGroup = new FormGroup({
    nameHouseCar: new FormControl(),
    trip: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    car: new FormControl(),
  })

  constructor(private houseCarService: HouseCarService,
              private carService: CarService,
              private tripService: TripService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.findAllCars();
    this.findAllTrips();
  }

  private findAllCars() {
    this.carService.getALlCar().subscribe(car => {
      this.carList = car
      console.log(this.carList)
    })
  }

  private findAllTrips() {
    this.tripService.getALlTrip().subscribe(trip => {
      this.tripList = trip
      console.log(this.tripList)
    })
  }

  createHouseCar() {
this.houseCar = this.houseCarForm.value
    console.log(this.houseCar);
this.houseCarService.saveHouseCar(this.houseCar).subscribe(houseCar=>{
  this.router.navigateByUrl("");
})
  }


}
