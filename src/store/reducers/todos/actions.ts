import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTodoList } from "../../../api/getTodoList";
import { AppDispatch, RootState } from "../../store";
import { Todos } from "./types";

const ACTION_NAMESPACE = "todos" 

export const todoListAsync = createAsyncThunk<{payload:Array<Todos>},
 {},  {
  dispatch: AppDispatch
  state: RootState
}>(
    `${ACTION_NAMESPACE}/saveTodoList`,
    async ({},  { rejectWithValue }): Promise<any>  => {
      try{
        const res = (await getTodoList()).data;
        return res as Array<Todos>;
      } 
      catch (err:any) {
        console.log(rejectWithValue(err.response.data))
        throw rejectWithValue(err)
      }
    }
  );
