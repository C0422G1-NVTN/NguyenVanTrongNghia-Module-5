import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardDetailComponent} from "./card-detail/card-detail.component";
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cart', component:CartComponent},
  {path: 'detail/:id', component:CardDetailComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
