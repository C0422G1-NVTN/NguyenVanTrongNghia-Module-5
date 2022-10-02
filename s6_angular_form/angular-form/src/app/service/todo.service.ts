import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get("http://localhost:3000/todo");
  }
  push(todo){
    return this.http.post("http://localhost:3000/todo",todo)
  }
  detele(id: number){
    return this.http.delete("http://localhost:3000/todo/"+id)
  }
}
