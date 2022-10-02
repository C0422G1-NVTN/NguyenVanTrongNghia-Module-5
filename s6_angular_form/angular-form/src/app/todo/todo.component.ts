import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {FormControl} from "@angular/forms";
import {TodoService} from "../service/todo.service";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  constructor(private todoService:TodoService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.todoService.findAll().subscribe(next => {
      this.todos = next;
    })
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.push(todo).subscribe(next => {
        this.getAll();
        this.content.reset();
      });
    }
  }

  deleteTodo(id: number) {
    this.todoService.detele(id).subscribe(next => {
      this.getAll();
    })
    }

  }


