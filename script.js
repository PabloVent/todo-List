var todoList = {
    todos : [],
    displayTodos: function() {
        console.log('myTodos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        displayTodos();
    },
    

};