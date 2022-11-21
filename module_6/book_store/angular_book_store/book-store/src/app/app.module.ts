import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
// @ts-ignore
import {NgxUiLoaderHttpModule} from "ngx-ui-loader";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        timeOut: 2000,
        closeButton: true,
        progressBar: true,
        positionClass: 'toast-top-center',
        preventDuplicates: true
      }
    ),
    NgxPaginationModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
