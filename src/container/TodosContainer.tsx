import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hook';
import { todoListAsync } from '../store/reducers/todos/actions';

export default function TodosContainer() {
  const dispatch = useAppDispatch();
  const { TodosList } = useAppSelector((state) => state.todos);

  useEffect(() => {
    getTodoList()
  }, [])

  useEffect(()=>{console.log(TodosList)},[TodosList])

  const getTodoList = () => {
    dispatch(todoListAsync({}))
      .then(unwrapResult)
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError)
      });
  }

  return (
    <div>todosContainer</div>
  )
}
