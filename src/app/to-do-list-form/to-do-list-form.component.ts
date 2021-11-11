import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoList } from '../toDoList';
import { ToDoListService } from '../to-do-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.scss']
})
export class ToDoListFormComponent implements OnInit, OnDestroy {
  isAdd: boolean = false;
  isEdit: boolean = false;
  toDoListId: number = 0;

  toDoList: ToDoList = {
    id: 0,
    name: '',
    color: '',
    textcolor: ''
  }

  isSubmitted: boolean = false;
  errorMessage: string = "";

  toDoList$: Subscription = new Subscription();
  postToDoList$: Subscription = new Subscription();
  putToDoList$: Subscription = new Subscription();

  constructor(private router: Router, private toDoListService: ToDoListService) {

    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.toDoListId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.toDoListId != null && this.toDoListId > 0) {
      this.toDoList$ = this.toDoListService.getToDoListById(this.toDoListId).subscribe(result => this.toDoList = result);
    }

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.toDoList$.unsubscribe();
    this.postToDoList$.unsubscribe();
    this.putToDoList$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postToDoList$ = this.toDoListService.postToDoLists(this.toDoList).subscribe(result => {
                //all went well
                this.router.navigateByUrl("");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putToDoList$ = this.toDoListService.putToDoLists(this.toDoListId, this.toDoList).subscribe(result => {
                //all went well
                this.router.navigateByUrl("");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }

}

