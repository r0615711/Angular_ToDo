import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoItem } from '../toDoItem';
import { ToDoList } from '../toDoList';
import { ToDoListService } from '../to-do-list.service';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  @Input() toDoList: ToDoList = {
    id: 0, name: '',
    color: '',
    textcolor: ''
  }

  toDoLists: ToDoList[] = [];

  toDoItems: ToDoItem[] = [];
  toDoItems$: Observable<ToDoItem[]> = new Observable<ToDoItem[]>();
  itemColor: string = "";


  toDoLists$: Subscription = new Subscription();
  deleteToDoList$: Subscription = new Subscription();

  errorMessage: string = '';
  router: any;
  deleteCategorie$: any;

  constructor(private toDoItemService: ToDoItemService, private toDoListService: ToDoListService) { }


  ngOnInit(): void {
    // this.toDoItems$ = this.toDoItemService.getToDoItems();
    // this.toDoItems$ = this.toDoItemService.getToDoItemsBylistId(3);
    this.toDoItems$ = this.toDoItemService.getToDoItemsBylistId(this.toDoList.id);
    // this.toDoItemService.getToDoItems().subscribe(result => this.article = result);
    this.itemColor = this.toDoList.color;

    // this.toDoLists = this.toDoListService.getToDoLists();
  }

  ngOnDestroy(): void {
    this.toDoLists$.unsubscribe();
    this.deleteToDoList$.unsubscribe();
  }


  add() {
    //Navigate to form in add mode
    this.router.navigate(['itemlist/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['itemlist/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteCategorie$ = this.toDoListService.deleteToDoLists(id).subscribe(result => {
      //all went well
      this.getToDoLists();
      this.router.navigate(['']);
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }
  getToDoLists() {
    this.toDoLists$ = this.toDoListService.getToDoLists().subscribe(result => this.toDoLists= result);
  }

}
