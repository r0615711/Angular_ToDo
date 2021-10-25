import { Injectable } from '@angular/core';
import { ToDoList } from './toDoList';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor(private httpClient: HttpClient) {
  }

  getToDoLists(): Observable<ToDoList[]> {
    return this.httpClient.get<ToDoList[]>("http://localhost:3000/lists");
  }

  getArticleById(id: number): Observable<ToDoList> {
    return this.httpClient.get<ToDoList>("http://localhost:3000/lists/" + id);
  }

  // getToDoLists(): ToDoList[] {
  //   let toDoLists: ToDoList[] = [];

  //   let toDoList1: ToDoList = {
  //     id: 1,
  //     title: "---titel-1---",
  //     category: "blue",
  //   };

  //   let toDoList2: ToDoList = {
  //     id: 2,
  //     title: "---titel-2---",
  //     category: "purple",
  //   };

  //   let toDoList3: ToDoList = {
  //     id: 3,
  //     title: "---titel-3---",
  //     category: "pink",
  //   };

  //   toDoLists.push(toDoList1);
  //   toDoLists.push(toDoList2);
  //   toDoLists.push(toDoList3);
  //   return toDoLists;
  // }
}
