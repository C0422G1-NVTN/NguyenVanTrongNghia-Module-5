import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FuramaHomeComponent} from "./furama-home/furama-home.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerAddComponent} from "./customer/customer-add/customer-add.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {FacilityAddComponent} from "./facility/facility-add/facility-add.component";
import {FacilityEditComponent} from "./facility/facility-edit/facility-edit.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";


const routes: Routes = [
  {path: '', component: FuramaHomeComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/customer-add', component: CustomerAddComponent},
  {path: 'customer/customer-edit/:id', component: CustomerEditComponent},
  {path: 'facility/facility-list', component: FacilityListComponent},
  {path: 'facility/facility-add', component: FacilityAddComponent},
  {path: 'facility/facility-edit/:id', component: FacilityEditComponent},
  {path: 'contract/contract-list', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
