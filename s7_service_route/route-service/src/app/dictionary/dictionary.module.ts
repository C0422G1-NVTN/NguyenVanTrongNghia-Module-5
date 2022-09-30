import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionaryRoutingModule } from './dictionary-routing.module';
import { ListDictionaryComponent } from './list-dictionary/list-dictionary.component';
import { DetailDictionaryComponent } from './detail-dictionary/detail-dictionary.component';


@NgModule({
  declarations: [ListDictionaryComponent, DetailDictionaryComponent],
  imports: [
    CommonModule,
    DictionaryRoutingModule
  ]
})
export class DictionaryModule { }
