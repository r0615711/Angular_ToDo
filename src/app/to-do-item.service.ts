import { Injectable } from '@angular/core';
import { ToDoItem } from './toDoItem';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {

  constructor(private httpClient: HttpClient) {
  }

  getToDoItems(): Observable<ToDoItem[]> {
    // return this.httpClient.get<ToDoItem[]>("http://localhost:3000/items?_sort=date&_order=asc");
    return this.httpClient.get<ToDoItem[]>("http://localhost:3000/items");
  }

  getToDoItemById(id: number): Observable<ToDoItem> {
    return this.httpClient.get<ToDoItem>("http://localhost:3000/items/" + id);
  }

  // getToDoItemsBylistId(id: number): Observable<ToDoItem[]> {
  //   return this.httpClient.get<ToDoItem[]>("http://localhost:3000/items/?listId=" + id);
  // }

  getToDoItemsBylistId(id: number): Observable<ToDoItem[]> {

    let list = this.httpClient.get<ToDoItem[]>("http://localhost:3000/items/?listId=" + id +"&_sort=date&_order=asc");

    // for (let index:number in list){
    //   if (list[index].order )
    // }

    return list;
  }

  postCategory(item: ToDoItem): Observable<ToDoItem> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<ToDoItem>("http://localhost:3000/items", item, {headers: headers});
}

putCategory(id:number, item: ToDoItem): Observable<ToDoItem> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<ToDoItem>("http://localhost:3000/items/" + id, item, {headers: headers});
}

deleteCategory(id: number): Observable<ToDoItem> {
    return this.httpClient.delete<ToDoItem>("http://localhost:3000/items/" + id);
}










  // getToDoItems(): ToDoItem[] {
  //   let toDoItems: ToDoItem[] = [];

  //   let toDoItem: ToDoItem = {
  //     id: 1,
  //     list_id: 1,
  //     description: "Lorem ipsum dolor ...",
  //     date: "27/11/2020",
  //     status: "todo",
  //     order: 1,
  //   };

  //   let toDoItem2: ToDoItem = {
  //     id: 2,
  //     list_id: 2,
  //     description: "Lorem ipsum dolor ...",
  //     date: "28/11/2020",
  //     status: "todo",
  //     order: 2,
  //   };

  //   let toDoItem3: ToDoItem = {
  //     id: 3,
  //     list_id: 3,
  //     description: "Lorem ipsum dolor ...",
  //     date: "29/11/2020",
  //     status: "done",
  //     order: 3,
  //   };

  //   let toDoItem4: ToDoItem = {
  //     id: 4,
  //     list_id: 1,
  //     description: "Lorem ipsum dolor ...",
  //     date: "30/11/2020",
  //     status: "done",
  //     order: 4,
  //   };

  //   let toDoItem5: ToDoItem = {
  //     id: 5,
  //     list_id: 2,
  //     description: "Lorem ipsum dolor ...",
  //     date: "31/11/2020",
  //     status: "done",
  //     order: 5,
  //   };
  //   toDoItems.push(toDoItem);
  //   toDoItems.push(toDoItem2);
  //   toDoItems.push(toDoItem3);
  //   toDoItems.push(toDoItem4);
  //   toDoItems.push(toDoItem5);

  //   return toDoItems;
  // }
}
