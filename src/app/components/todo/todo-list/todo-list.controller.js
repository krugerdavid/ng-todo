class TodoListController {

	constructor(){}

	deleteTodo(event) {
		// console.log( self.index );

		this.onDelete({
			$event: {
				index: event.index,
				key: event.key
			}
		});
	}

	updateTodo(event) {
		
		this.onUpdate({
			$event: {
				index: event.index,
				todo: event.todo			
			}
		});
	}

	toggleTodo(event){
		this.onToggle({
			$event: {
				index: event.index,
				key: event.key
			}
		})
	}
	
}

export default TodoListController;