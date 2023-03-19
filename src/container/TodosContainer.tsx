import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import AddTodo from '../component/AddTodo';
import TodoItem from '../component/TodoItem';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { todoListAsync } from '../store/reducers/todos/actions';
import { Todo } from '../store/reducers/todos/types';

export default function TodosContainer() {
  const dispatch = useAppDispatch();
  const { TodosList } = useAppSelector((state) => state.todos);

  useEffect(() => {
    getTodoList()
  }, [])

  useEffect(()=> {console.log(TodosList)},[TodosList])

  const getTodoList = () => {
    dispatch(todoListAsync({}))
      .then(unwrapResult)
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError)
      });
  }

  return (
    <>
      <AddTodo />
      {TodosList.map((item: Todo) => <TodoItem todo={item} key={item.id} />)}
    </>
  )
}
