import template from './todo.html';
import controller from './todo.controller';

export const TodoComponent = {  
	bindings: {
    todoData: '<'
  },
	controller,
  template: template
};
