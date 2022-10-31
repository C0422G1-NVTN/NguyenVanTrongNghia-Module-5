import {Car} from "./car";
import {Trip} from "./trip";

export interface HouseCar {
  car?: Car;
  id?: number;
  nameHouseCar?: string;
  phone?: string;
  email?: string;
  trip?: Trip;
}
