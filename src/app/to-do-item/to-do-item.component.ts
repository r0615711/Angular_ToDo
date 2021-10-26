import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../toDoItem';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoList } from '../toDoList';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
@Input() toDoItem: ToDoItem = { id: 0, listId: 0, title: '', description: '', date: '', status: '', statusId: 0, order: 0 }
@Input() toDoList: ToDoList = {
  id: 0, name: '',
  color: '',
  textcolor: ''
}

itemColor: string = "";

  constructor(private toDoItemService: ToDoItemService) { }

  ngOnInit(): void {
    this.itemColor = this.toDoList.color;
  }

}
