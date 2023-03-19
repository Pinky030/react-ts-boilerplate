import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodoList } from "../../../api/getTodoList";
import { AppDispatch, RootState } from "../../store";
import { Todo } from "./types";

const ACTION_NAMESPACE = "todos" 

export const todoListAsync = createAsyncThunk<Array<Todo>,
 {},  {
  dispatch: AppDispatch
  state: RootState
}>(
    `${ACTION_NAMESPACE}/saveTodoList`,
    async ({},  { rejectWithValue }): Promise<any>  => {
      try{
        const res = (await getTodoList()).data;
        return res as Array<Todo>;
      } 
      catch (err:any) {
        throw rejectWithValue(err)
      }
    }
  );

  export const removeTodo = createAction<{targetId: number}>(
    `${ACTION_NAMESPACE}/removeTodo`
  )

  export const updateComplete = createAction<{target:Todo}>(
    `${ACTION_NAMESPACE}/updateComplete`
  )

  export const addTodo = createAction<{newTodo: string}> (
    `${ACTION_NAMESPACE}/addTodo`
  )