import controller from './todo-footer.controller';
import template from './todo-footer.html';

export const TodoFooterComponent = {

  controller: controller,
  template: template,
  bindings: {
    onClearTodos: '&'
  }
};
