class TodoController {
	constructor(TodoService) {
    var self = this;
    self.todoList = [];

    this.todoService = TodoService;
    this.todoService.getAllItems().then(function( data ){
      self.todoList = data;
    });
    
  }

  // add a new todo on the list and the DB
  addTodo(event) {
    var self = this;
    // save the new todo
    this.todoService.addTodo(event.todo).then( function( data ){
      self.todoList.push( data );
    });
    
  };

  // delete a todo from the list and the DB
  deleteTodo(event){
    var self = this;
    var index = event.index;
    var key = event.key;

    this.todoService.remove(key).then(function(data){
      self.todoList.splice(index, 1);
    });
    
  }

  // update the text of the todo
  updateTodo(event){
    var self = this;
    var index = event.index;
    var key = event.todo.key;

    this.todoService.edit(key, event.todo).then( function( data ){
      console.log('Todo Edited');
    })
  }

  // toggle the state of a todo
  toggleTodo(event) {
    var self = this;
    var index = event.index;
    var key = event.key;

    this.todoService.toggleTodo(key).then(function(data){
      self.todoList[index].completed = !self.todoList[index].completed;
    });
  }

  clearTodos() {
    var self = this;
    this.todoService.clearTodos().then(function( data ){
      console.log('DB cleared');
      self.todoList = {};
    });
  }
	
}

TodoController.$inject = ['TodoService']

export default TodoController;