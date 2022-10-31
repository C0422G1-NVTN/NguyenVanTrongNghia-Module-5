import {Component, OnInit} from '@angular/core';
import {HouseCar} from "../model/housecar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Car} from "../model/car";
import {HouseCarService} from "../service/housecar.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CarService} from "../service/car.service";
import {TripService} from "../service/trip.service";
import {Trip} from "../model/trip";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  houseCar: HouseCar = {};
  carList: Car[] = [];
  tripList: Trip[] = [];
  id: number;
  houseCarForm: FormGroup;


  constructor(private houseCarService: HouseCarService,
              private carService: CarService,
              private tripService: TripService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');

      this.houseCarService.findById(this.id).subscribe(data => {
        console.log(data);
        this.houseCarForm = new FormGroup({
          id: new FormControl(data.id,[Validators.required]),
          nameHouseCar: new FormControl(data.nameHouseCar, [Validators.required]),
          trip: new FormControl(data.trip, [Validators.required]),
          phone: new FormControl(data.phone, [Validators.required]),
          email: new FormControl(data.email, [Validators.required]),
          car: new FormControl(data.car, [Validators.required]),
        })
      });
    });
  }

  ngOnInit(): void {
    this.carService.getALlCar().subscribe(data => {
      this.carList = data;
    });
    this.tripService.getALlTrip().subscribe(data => {
      this.tripList = data;
    });
  }


  editHouseCar() {
    const houseCar = this.houseCarForm.value;
    console.log(houseCar)
    this.houseCarService.editHouseCar(houseCar).subscribe(next =>
      this.router.navigateByUrl(''));
    // Swal.fire('Yeah','Create successfully','success');
  }

  compareCar(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
