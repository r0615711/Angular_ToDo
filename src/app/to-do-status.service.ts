import { Injectable } from '@angular/core';
import { ToDoStatus } from './toDoStatus';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ToDoStatusService {

  constructor(private httpClient: HttpClient) {
  }

  getToDoStatuses(): Observable<ToDoStatus[]> {
    return this.httpClient.get<ToDoStatus[]>("http://localhost:3000/statuses");
  }

  getToDoStatusById(id: number): Observable<ToDoStatus> {
    return this.httpClient.get<ToDoStatus>("http://localhost:3000/statuses/" + id);
  }
}
