class TodoItemController {

	constructor(){}

	$onInit(){
		this.editing = false;
	}

	enableEditing(){
		this.editing = true;
	}

	deleteTodo() {
		var self = this;

		this.onDelete({
			$event: {
				index: self.index,
				key: self.key
			}
		});
	}

	updateTodo(){

		var self = this;

		this.onUpdate({
			$event: {
				index: self.index,
				todo: {
					key: self.key,
					title: self.title
				}
			}
		});
		this.editing = false;
	}

	toggleTodo(){
		var self = this;

		this.onToggle({
			$event: {
				index: self.index,
				key: self.key
			}
		})
	}
}

export default TodoItemController;