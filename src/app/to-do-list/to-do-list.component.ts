import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoItem } from '../toDoItem';
import { ToDoList } from '../toDoList';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  @Input() toDoList: ToDoList = {
    id: 0, name: '',
    color: '',
    textcolor: ''
  }

  toDoItems: ToDoItem[] = [];
  toDoItems$: Observable<ToDoItem[]> = new Observable<ToDoItem[]>();

  constructor(private toDoItemService: ToDoItemService) { }

  ngOnInit(): void {
    this.toDoItems$ = this.toDoItemService.getToDoItems();
    // this.toDoItemService.getToDoItems().subscribe(result => this.article = result);
  }

}
