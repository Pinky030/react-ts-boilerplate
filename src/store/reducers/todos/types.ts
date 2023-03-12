export interface TodosState {
    TodosList: Array<Todos>,
    Todos: Todos
}

export interface Todos {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}