import React from 'react'
import TodoItem from './TodoItem'

function Todo(props) {
    return <TodoItem todolist={props.todolist} onDelete={props.onDelete} />
}
export default Todo
