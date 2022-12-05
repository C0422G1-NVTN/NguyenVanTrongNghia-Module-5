import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {TokenStorageService} from "../service/token-storage.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  id: number;
  book: Book;

  constructor(private bookService: BookService,private tokenStorageService : TokenStorageService, private  router : Router,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param: ParamMap) => {
        this.id = +param.get("id")
      }

    )
  }

  ngOnInit(): void {
      this.bookService.findBookById(this.id).subscribe(book => {
        this.book = book;
      })
  }

}
