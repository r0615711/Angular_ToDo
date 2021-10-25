import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../toDoItem';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
@Input() toDoItem: ToDoItem = { id: 0, listId: 0, title: '', description: '', date: '', status: '', statusId: 0, order: 0 }

  constructor() { }

  ngOnInit(): void {
  }

}
