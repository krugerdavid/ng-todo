import angular from 'angular';

import TodoService from './todo.service'

import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';

const todo = angular
    .module('todo', [])
    .service('TodoService', TodoService)
    .component('todo', TodoComponent)
    .component('todoForm', TodoFormComponent )
    .component('todoList', TodoListComponent )
    .component('todoItem', TodoItemComponent )
    .component('todoFooter', TodoFooterComponent )
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('todo', {
            url: '/',
            component: 'todo'
        });
        $urlRouterProvider.otherwise('/');
    })
    .name;
    
export default todo;