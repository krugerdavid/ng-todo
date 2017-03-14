import controller from './todo-form.controller';
import templateUrl from './todo-form.html';

export const TodoFormComponent = {
	bindings: {
    onSubmit: '&'
  },
  template: templateUrl,
  controller
};