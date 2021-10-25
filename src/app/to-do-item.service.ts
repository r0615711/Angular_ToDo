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
      date: "27/11/2020",
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
      date: "29/11/2020",
      status: "done",
      order: 3,
    };

    let toDoItem4: ToDoItem = {
      id: 4,
      list_id: 1,
      description: "Lorem ipsum dolor ...",
      date: "30/11/2020",
      status: "done",
      order: 4,
    };

    let toDoItem5: ToDoItem = {
      id: 5,
      list_id: 2,
      description: "Lorem ipsum dolor ...",
      date: "31/11/2020",
      status: "done",
      order: 5,
    };
    toDoItems.push(toDoItem);
    toDoItems.push(toDoItem2);
    toDoItems.push(toDoItem3);
    toDoItems.push(toDoItem4);
    toDoItems.push(toDoItem5);

    return toDoItems;
  }
}
