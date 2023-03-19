import React, { useState } from 'react'
import { useAppDispatch } from '../store/hook';
import { addTodo } from '../store/reducers/todos/actions';

export default function AddTodo() {
    const dispatch = useAppDispatch();

    const [newTodo, setNewTodo] = useState<string>("")

    const addTodoItem = () => {
        dispatch(addTodo({newTodo:newTodo}));
    }

    return (
        <div>
            <div>New Todo</div>
            <div>
                <input type={"text"} onChange={(e)=>{setNewTodo(e.target.value)}}/>
                <button onClick={()=>{addTodoItem()}}>Add</button>
            </div>
        </div>
    )
}
