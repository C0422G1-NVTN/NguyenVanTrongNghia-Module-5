import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {IWord} from "../IWord";

@Component({
  selector: 'app-detail-dictionary',
  templateUrl: './detail-dictionary.component.html',
  styleUrls: ['./detail-dictionary.component.css']
})
export class DetailDictionaryComponent implements OnInit {
  word: IWord;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const key = paramMap.get('word');
        if (key != null) {
          this.word = this.dictionaryService.findByWord(key);
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
