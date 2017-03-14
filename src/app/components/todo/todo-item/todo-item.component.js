import controller from './todo-item.controller';
import template from './todo-item.html';

export const TodoItemComponent = {
	bindings: {
    index: '<',
    key: '<',
    title: '<',
    completed: '<',
    onDelete: '&',
    onUpdate: '&',
    onToggle: '&'
  },
  template: template,
  controller
};