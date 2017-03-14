class TodoFormController {
  
  constructor() {}

  $onInit() {
    this.newTodo = {};
  }

  submitForm() {
    if (!this.newTodo.title || this.newTodo.title.length < 25 ) return;

    this.onSubmit({
      $event: {
        todo: this.newTodo
      }
    })
    this.resetTodo();
  };

  resetTodo() {
    this.newTodo = {};
  }

}

export default TodoFormController;