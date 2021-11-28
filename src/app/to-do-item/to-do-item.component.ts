import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ToDoItem } from '../toDoItem';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoList } from '../toDoList';
import { ToDoStatus } from '../toDoStatus';
import { ToDoStatusService } from '../to-do-status.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit, OnDestroy {
@Input() toDoItem: ToDoItem = { id: 0, listId: 0, title: '', description: '', date: '', status: '', statusId: 0, order: 0 }
@Input() toDoList: ToDoList = { id: 0, name: '', color: '', textcolor: ''}
@Input() toDoStatus: ToDoStatus = { id: 0, name: ''}

items: ToDoItem[] = [];
items$: Subscription = new Subscription();
deleteItem$: Subscription = new Subscription();

errorMessage: string = '';


itemColor: string = "";
itemStatus: Observable<ToDoStatus> = new Observable<ToDoStatus>();

  constructor(private toDoItemService: ToDoItemService, private toDoStatusService: ToDoStatusService, private router: Router) { }


  ngOnInit(): void {
    this.itemColor = this.toDoList.color;
    this.itemStatus = this.toDoStatusService.getToDoStatusById(this.toDoItem.statusId);
  }

  ngOnDestroy(): void {
    this.items$.unsubscribe();
    this.deleteItem$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['item/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['item/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteItem$ = this.toDoItemService.deleteCategory(id).subscribe(result => {
      //all went well
      this.getItems();
      this.router.navigateByUrl("");
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getItems() {
    this.items$ = this.toDoItemService.getToDoItems().subscribe(result => this.items = result);
  }
}








