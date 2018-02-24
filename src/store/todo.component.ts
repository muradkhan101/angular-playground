import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ToDo, ADD_TODO } from '../store/store.reducers';
@Component({
    selector: 'to-dos',
    template: `
        <div class='todos'>
            <div class='todo' *ngFor="let todo of (todos | async)">
                <h1> {{todo.id}} </h1>
                <h4> {{todo.task}}</h4>
            </div>
        </div>
        <div class='new-todo'>
            <input type="text" #todoInput>
            <button (click)="addTodo(todoInput)"> Add To do</button>
        </div>
    `,
})
export class TodoComponent implements OnInit {
    public idCount = 0;
    todos: Observable<Array<ToDo>>;
    constructor(
        private store: Store<{toDo: Array<ToDo>}>
    ) {}
    ngOnInit() {
        this.todos = this.store.select('toDo');
    }
    addTodo(input) {
        this.store.dispatch({type: ADD_TODO, data: {id: this.idCount++, task: input.value}});
        input.value = '';
    }
}