import {Injectable} from '@angular/core';
import {IWord} from "../dictionary/IWord";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: IWord[] = [{
    word: 'dog',
    mean: 'chó'
  }, {
    word: 'cat',
    mean: 'mèo'
  }, {
    word: 'mouse',
    mean: 'chuột'
  }, {
    word: 'bird',
    mean: 'chim'
  }, {
    word: 'ant',
    mean: 'kiến'
  }, {
    word: 'bee',
    mean: 'ong'
  }]

  constructor() {
  }

  getAll(){
    return this.dictionary;
  }

  saveProduct(product) {
    this.dictionary.push(product);
  }

  findByWord(word: string){
    return this.dictionary.find(item => item.word === word);
  }
}
