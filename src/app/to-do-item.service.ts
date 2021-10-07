import { Injectable } from '@angular/core';
import { ToDoItem } from './toDoItem';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {

  constructor() { }

  getToDoItems(): ToDoItem[] {
    let toDoItems: ToDoItem[] = [];

    let toDoItem: ToDoItem = {
      id: 1,
      list_id: 1,
      description: "Lorem ipsum dolor ...",
      date: "28/11/2020",
      status: "todo",
      order: 1,
    };

    let toDoItem2: ToDoItem = {
      id: 2,
      list_id: 2,
      description: "Lorem ipsum dolor ...",
      date: "28/11/2020",
      status: "todo",
      order: 2,
    };

    let toDoItem3: ToDoItem = {
      id: 3,
      list_id: 3,
      description: "Lorem ipsum dolor ...",
      date: "28/11/2020",
      status: "done",
      order: 3,
    };

    toDoItems.push(toDoItem);
    toDoItems.push(toDoItem2);
    toDoItems.push(toDoItem3);

    return toDoItems;
  }
}
