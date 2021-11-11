import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ToDoListFormComponent } from './to-do-list-form/to-do-list-form.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  // { path: '/toDoList/form', component:  ToDoListFormComponent},
  { path: 'itemlist/form', component: ToDoListFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
