var todoList = {
    todos : [],
    displayTodos: function () {
        console.log('myTodos:');
        if (this.todos.length === 0) {
            console.log('Your todos list is empty');
        } else {
            for (var i = 0; i < this.todos.length; i++) {
                console.log(this.todos[i].todoText);
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    }
};

// todoList.toggleCompleted should flip the completed property, version 4, video 4.


