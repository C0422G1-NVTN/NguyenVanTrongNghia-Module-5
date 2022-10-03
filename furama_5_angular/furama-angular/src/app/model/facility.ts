import {RentType} from "./rent-type";
import {FacilityType} from "./facility-type";

export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  standardRoom?: string;
  descriptionOther?: string;
  poolArea?: number;
  numberFloor?: number;
  facilityFree?: string;
  image?: string;
  rentType?: RentType;
  facilityType?: FacilityType
}
