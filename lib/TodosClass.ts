type TodosType = string[]

class TodosClass {
  todos: TodosType = []
  createTodo = (todo: string) => {
    this.todos = [...this.todos, todo]
  }
  getTodos():TodosType {
    return this.todos
  }
}

const Todos = new TodosClass()

export { Todos }