import { createReducer } from "@reduxjs/toolkit";
import { todoListAsync } from "./actions";
import { TodosState } from "./types";

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
        .addCase(todoListAsync.fulfilled, (state, { payload }) => {
            debugger
            state.TodosList = payload.data;
        })
        .addCase(todoListAsync.rejected, (state, action) => {
            state.TodosList = initialTodosState.TodosList
        })
        .addDefaultCase(state => state)
})