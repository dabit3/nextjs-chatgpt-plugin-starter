interface Todo {
  [key: string]: string
}
type TodosType = Todo[]

class TodosClass {
  todos: TodosType = []
  createTodo = (todo: Todo) => {
    this.todos = [...this.todos, todo]
  }
  getTodos():TodosType {
    return this.todos
  }
  deleteTodo(todo:Todo):void {
    const index = this.todos.findIndex(item => item.todo === todo.todo)
    this.todos.splice(index, 1)
  }
}

const Todos = new TodosClass()

export { Todos }