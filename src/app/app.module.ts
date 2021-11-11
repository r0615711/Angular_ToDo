import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ToDoListFormComponent } from './to-do-list-form/to-do-list-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    HomeComponent,
    MenuComponent,
    ToDoListComponent,
    ToDoListFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
