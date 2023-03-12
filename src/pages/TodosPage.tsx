import React, { useCallback, useEffect } from 'react'
import TodosContainer from '../container/TodosContainer'

export default function TodosPage() {

    useEffect(() => {
        getTodosList();
    }, [])

    const getTodosList = () => {

    }

    return (
        <div>
            <TodosContainer />
        </div>
    )
}
