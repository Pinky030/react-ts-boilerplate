import { AnyAction, combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { todosReducer } from "./todos/reducer";


const appReducer = combineReducers({
    todos: todosReducer
});


export const rootReducer = (state:any, action:AnyAction) => {
    //remove data
    //     storage.removeItem('persist:root')
    //     return appReducer(undefined, action);

    return appReducer(state, action);
};