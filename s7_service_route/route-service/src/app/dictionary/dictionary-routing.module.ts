import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesAppComponent} from "../timelines-app/timelines-app.component";
import {ListDictionaryComponent} from "./list-dictionary/list-dictionary.component";
import {DetailDictionaryComponent} from "./detail-dictionary/detail-dictionary.component";


const routes: Routes = [
  {path: 'dictionary', component: ListDictionaryComponent},
  {path: 'detail/:word', component: DetailDictionaryComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryRoutingModule { }
