import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {TokenStorageService} from "./token-storage.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Book} from "../model/book";

const SERVICE_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private  httpClient: HttpClient, private auth: AuthService,
              private tokenStorageService: TokenStorageService) { }

  findByAllAndSearchTitleBook(name: string, page: number): Observable<any> {
    return this.httpClient.get<Book[]>(SERVICE_URL + "/api/public/book?page=" + page + "&bookTitle=" + name, this.auth.getToken());
  }

  findAllAndSortBook(page:number): Observable<any>{
    return this.httpClient.get<Book[]>(SERVICE_URL + "/api/public/sortReleaseDate/list?page=" + page, this.auth.getToken());
  }

  findBookById(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/api/public/detail/" + id, this.auth.getToken());
  }
}
