import controller from './todo-list.controller';
import template from './todo-list.html';

export const TodoListComponent = {
	bindings: {
    list: '<',
    onDelete: '&',
    onUpdate: '&',
    onToggle: '&'
  },
  template: template,
  controller
};