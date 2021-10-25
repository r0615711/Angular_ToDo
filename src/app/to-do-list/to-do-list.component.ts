import { Component, Input, OnInit } from '@angular/core';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoItem } from '../toDoItem';
import { ToDoList } from '../toDoList';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  @Input() toDoList: ToDoList = {  id: 0,  title: '',  category: ''}

  toDoItems: ToDoItem[] = [];

  constructor(private toDoItemService: ToDoItemService) { }

  ngOnInit(): void {
    this.toDoItems = this.toDoItemService.getToDoItems();
  }

}
