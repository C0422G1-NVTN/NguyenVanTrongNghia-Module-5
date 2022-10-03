import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FuramaHeaderComponent} from './furama-header/furama-header.component';
import {FuramaFooterComponent} from './furama-footer/furama-footer.component';
import {FuramaHomeComponent} from './furama-home/furama-home.component';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {FacilityAddComponent} from './facility/facility-add/facility-add.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerAddComponent} from './customer/customer-add/customer-add.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    FuramaHeaderComponent,
    FuramaFooterComponent,
    FuramaHomeComponent,
    FacilityListComponent,
    FacilityAddComponent,
    FacilityEditComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
