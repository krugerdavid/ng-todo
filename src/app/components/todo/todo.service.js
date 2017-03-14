class TodoService {

	constructor($localForage, $q){
		// var
		this.$localForage = $localForage;
		this.$q = $q;
		this.db = $localForage.createInstance({
			name: 'todo-app',
			driver: 'webSQLStorage',
			storeName: 'todos'
		});

	}

	getAllItems(){
		var def = this.$q.defer();
		var parentDb = this.db;
		
		this.db.keys().then(function(data) {
			var promises  = data.map(function(item) { return parentDb.getItem(item); });
			Promise.all(promises).then(function(results) {
				def.resolve(results);
			});
		});

		return def.promise;

	}

	remove(index){
		var def = this.$q.defer();

		this.db.removeItem(index).then(function(data){
			def.resolve( data );
		})
		return def.promise;
	}

	edit(index, editedTodo ){
		var def = this.$q.defer();
		var parentDb = this.db;

		this.db.getItem(index).then(function(todo){
			todo.title = editedTodo.title;

			parentDb.setItem(todo.key, todo ).then(function( data ){
				def.resolve( data );	
			})
			
		})
		return def.promise;
	}

	toggleTodo(index) {
		var def = this.$q.defer();	
		var parentDb = this.db;

		this.db.getItem(index).then(function(todo){
			todo.completed = !todo.completed;

			parentDb.setItem(todo.key, todo ).then(function( data ){
				console.log( data );
				def.resolve( data );	
			})
			
		})
		return def.promise;
	}

	addTodo(todo){

		var def = this.$q.defer();
		var parentDb = this.db;

		var newTodo = Object.assign({}, todo, {
			completed: false
		});

		this.db.length().then( function(length ){
			newTodo.key = length + 1;
			parentDb.setItem( length + 1, newTodo ).then(function(todo){
				def.resolve(todo);
			});
		});

		return def.promise;

	}

	clearTodos() {
		var def = this.$q.defer();
		this.db.clear().then( function( data ){
			def.resolve(data);
		});
		return def.promise;
	}
}

TodoService.$inject = ['$localForage', '$q'];

export default TodoService;