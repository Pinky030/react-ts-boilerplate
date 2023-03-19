import { createReducer } from "@reduxjs/toolkit";
import { addTodo, removeTodo, todoListAsync, updateComplete } from "./actions";
import { Todo, TodosState } from "./types";

export const initialTodosState: TodosState = {
    TodosList: [],
    Todos: {
        userId: 0,
        id: 0,
        title: "",
        completed: false
    }
}

export const todosReducer = createReducer(initialTodosState, (builder) => {
    builder
        .addCase(todoListAsync.fulfilled, (state, action) => {
            state.TodosList = action.payload;
        })
        .addCase(todoListAsync.rejected, (state, action) => {
            state.TodosList = initialTodosState.TodosList
        })
        .addCase(removeTodo, (state, action) => {
            state.TodosList = state.TodosList.filter((item: Todo) => item.id !== action.payload.targetId);
        })
        .addCase(updateComplete, (state, action) => {
            state.TodosList = state.TodosList.map((item: Todo) =>
                item.id === action.payload.target.id ?
                { ...item, completed: true } : item)
        })
        .addCase(addTodo, (state, action) => {
            let length = state.TodosList.length;
            let newItem:Todo = {
                id:0,
                title: action.payload.newTodo,
                userId: length,
                completed:false
            }

           state.TodosList.push(newItem);
        })
        .addDefaultCase(state => state)
})