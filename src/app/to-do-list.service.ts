import { Injectable } from '@angular/core';
import { ToDoList } from './toDoList';
@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor() { }

  getToDoLists(): ToDoList[] {
    let toDoLists: ToDoList[] = [];

    let toDoList1: ToDoList = {
      id: 1,
      title: "--- titel 1 ---",
      category: "category",
    };

    let toDoList2: ToDoList = {
      id: 2,
      title: "--- titel 2 ---",
      category: "category",
    };

    let toDoList3: ToDoList = {
      id: 3,
      title: "--- titel 3 ---",
      category: "category",
    };

    toDoLists.push(toDoList1);
    toDoLists.push(toDoList2);
    toDoLists.push(toDoList3);
    return toDoLists;
  }
}
