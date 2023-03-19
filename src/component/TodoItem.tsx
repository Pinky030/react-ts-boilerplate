import React from 'react'
import { useAppDispatch } from '../store/hook'
import { removeTodo, updateComplete } from '../store/reducers/todos/actions';
import { Todo } from '../store/reducers/todos/types'

interface ITodoItemProps {
  todo: Todo
}

export default function TodoItem(props: ITodoItemProps) {
  const dispatch = useAppDispatch();

  const removeItem = () => {
    dispatch(removeTodo({ targetId: props.todo.id }))
  }

  const markAsCompleted = () => {
    dispatch(updateComplete({target:props.todo}))
  }

  return (
    <div style={{ border: '1px solid white', margin: '1rem', padding: '1rem', textAlign: 'left' }}>
      <div>Title:{props.todo.title}</div>
      <div>Completed:{`${props.todo.completed}`}</div>
      <div style={{display:'flex'}}>
        <button style={{ backgroundColor: 'green' }} onClick={() => { markAsCompleted () }}>Completed</button>
        <button style={{ backgroundColor: 'red' }} onClick={() => { removeItem() }}>Remove Todo</button>
      </div>
    </div>
  )
}
