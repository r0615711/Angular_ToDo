import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../toDoItem';
import { ToDoItemService } from '../to-do-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toDoItems: ToDoItem[] = [];

  constructor(private toDoItemService: ToDoItemService) { }

  ngOnInit(): void {
    this.toDoItems = this.toDoItemService.getToDoItems();
  }

}
