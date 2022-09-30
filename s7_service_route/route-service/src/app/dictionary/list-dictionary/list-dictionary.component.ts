import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {DictionaryService} from "../../service/dictionary.service";
import {Product} from "../../model/product";
import {IWord} from "../IWord";

@Component({
  selector: 'app-list-dictionary',
  templateUrl: './list-dictionary.component.html',
  styleUrls: ['./list-dictionary.component.css']
})
export class ListDictionaryComponent implements OnInit {
  dictionary: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) {
    this.dictionary = dictionaryService.getAll();
  }

  ngOnInit(): void {
  }

}
