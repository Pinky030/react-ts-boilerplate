export interface TodosState {
    TodosList: Array<Todo>,
    Todos: Todo
}

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}