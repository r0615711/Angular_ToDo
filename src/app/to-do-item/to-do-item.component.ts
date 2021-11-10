import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../toDoItem';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoList } from '../toDoList';
import { ToDoStatus } from '../toDoStatus';
import { ToDoStatusService } from '../to-do-status.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
@Input() toDoItem: ToDoItem = { id: 0, listId: 0, title: '', description: '', date: '', status: '', statusId: 0, order: 0 }
@Input() toDoList: ToDoList = { id: 0, name: '', color: '', textcolor: ''}
@Input() toDoStatus: ToDoStatus = { id: 0, name: ''}

itemColor: string = "";
itemStatus: Observable<ToDoStatus> = new Observable<ToDoStatus>();

  constructor(private toDoItemService: ToDoItemService, private toDoStatusService: ToDoStatusService) { }

  ngOnInit(): void {
    this.itemColor = this.toDoList.color;
    this.itemStatus = this.toDoStatusService.getToDoStatusById(this.toDoItem.statusId);
  }

}
