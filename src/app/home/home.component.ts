import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../toDoItem';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoList } from '../toDoList';
import { ToDoListService } from '../to-do-list.service';

import { Observable } from 'rxjs';

import {Router} from '@angular/router';

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

  constructor(private toDoItemService: ToDoItemService, private toDoListService: ToDoListService,  private router: Router ) { }

  ngOnInit(): void {

    this.toDoLists$ = this.toDoListService.getToDoLists();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['itemlist/form'], {state: {mode: 'add'}});
  }

  addItem() {
    //Navigate to form in add mode
    this.router.navigate(['item/form'], {state: {mode: 'add'}});
  }

}
