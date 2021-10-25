import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../toDoItem';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoList } from '../toDoList';
import { ToDoListService } from '../to-do-list.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toDoItems: ToDoItem[] = [];
  toDoLists: ToDoList[] = [];

  toDoItems$: Observable<ToDoItem[]> = new Observable<ToDoItem[]>();
  toDoLists$: Observable<ToDoList[]> = new Observable<ToDoList[]>();

  constructor(private toDoItemService: ToDoItemService, private toDoListService: ToDoListService) { }

  ngOnInit(): void {
    this.toDoItems$ = this.toDoItemService.getToDoItems();
    this.toDoLists$ = this.toDoListService.getToDoLists();
  }

}
