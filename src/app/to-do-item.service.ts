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

}
