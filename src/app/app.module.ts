import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './conponents/todos/todos.component';
import { TodoItemComponent } from './conponents/todo-item/todo-item.component';
import { HeaderComponent } from './conponents/layout/header/header.component';
import { AddTodoComponent } from './conponents/add-todo/add-todo.component';
import { from } from 'rxjs';
import { AboutComponent } from './conponents/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
