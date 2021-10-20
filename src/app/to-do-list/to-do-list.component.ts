import { Component, OnInit } from '@angular/core';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoItem } from '../toDoItem';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  toDoItems: ToDoItem[] = [];

  constructor(private toDoItemService: ToDoItemService) { }

  ngOnInit(): void {
    this.toDoItems = this.toDoItemService.getToDoItems();
  }

}
