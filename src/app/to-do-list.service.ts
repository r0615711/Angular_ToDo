import { Injectable } from '@angular/core';
import { ToDoList } from './toDoList';

import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getToDoListById(id: number): Observable<ToDoList> {
    return this.httpClient.get<ToDoList>("http://localhost:3000/lists/" + id);
  }

  getToDoListsEmbedItems(): Observable<ToDoList[]> {
    return this.httpClient.get<ToDoList[]>("http://localhost:3000/lists?_embed=items");
  }



  postToDoLists(toDoList: ToDoList): Observable<ToDoList> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<ToDoList>("http://localhost:3000/lists", toDoList, {headers: headers});
  }

  putToDoLists(id:number, toDoList: ToDoList): Observable<ToDoList> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<ToDoList>("http://localhost:3000/lists/" + id, toDoList, {headers: headers});
  }

  deleteToDoLists(id: number): Observable<ToDoList> {
    return this.httpClient.delete<ToDoList>("http://localhost:3000/lists/" + id);
  }
}
