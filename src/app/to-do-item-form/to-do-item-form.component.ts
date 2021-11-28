import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ToDoItem } from '../toDoItem';
import { ToDoListService } from '../to-do-list.service';
import { ToDoItemService } from '../to-do-item.service';
import {Observable, Subscription} from 'rxjs';
import { ToDoList } from '../toDoList';

@Component({
  selector: 'app-to-do-item-form',
  templateUrl: './to-do-item-form.component.html',
  styleUrls: ['./to-do-item-form.component.scss']
})
export class ToDoItemFormComponent implements OnInit, OnDestroy  {

  toDoLists: ToDoList[] = [];

  toDoLists$: Observable<ToDoList[]> = new Observable<ToDoList[]>();

  isAdd: boolean = false;
  isEdit: boolean = false;
  itemId: number = 0;
  // listId: number = 0;

  item: ToDoItem = {
    id: 0,
    listId: 0,
    title: '',
    description: '',
    date: '',
    status: '',
    statusId: 0,
    order: 0
  };

  // list: ToDoList = {
  //   id: 0,
  //   name: '',
  //   color: '',
  //   textcolor: ''
  // }

  isSubmitted: boolean = false;
  errorMessage: string = "";

  item$: Subscription = new Subscription();
  postItem$: Subscription = new Subscription();
  putItem$: Subscription = new Subscription();

  constructor(private router: Router, private toDoItemService: ToDoItemService, private toDoListService: ToDoListService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.itemId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.itemId != null && this.itemId > 0) {
      this.item$ = this.toDoItemService.getToDoItemById(this.itemId).subscribe(result => this.item = result);

    }

   }


  ngOnInit(): void {
    this.toDoLists$ = this.toDoListService.getToDoLists();
  }

  ngOnDestroy(): void {
    this.item$.unsubscribe();
    this.postItem$.unsubscribe();
    this.putItem$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postItem$ = this.toDoItemService.postCategory(this.item).subscribe(result => {
                //all went well
                this.router.navigateByUrl("");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putItem$ = this.toDoItemService.putCategory(this.itemId, this.item).subscribe(result => {
                //all went well
                this.router.navigateByUrl("");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }


}
