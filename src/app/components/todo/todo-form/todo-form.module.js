import angular from 'angular';
import EventEmitter from 'angular';

import { TodoFormComponent } from './todo-form.component';
import './todo-form.scss';

export const TodoFormModule = angular
  .module('todo.form', [])
  .component('todoForm', TodoFormComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;