import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCompleted, updateTodo, deleteTodo } from './todoSlice'
import Todo from './Todo'

const TodoList = ({ todos, maxHeight }) => {
  const dispatch = useDispatch()
  const handleUpdateTodo = (id) => (text) => {
    dispatch(updateTodo({ id, text }))
  }

  return (
    <ul
      className="list-group scrollbar"
      style={{ maxHeight: maxHeight ? maxHeight : '360px' }}
    >
      {todos.map((el) => (
        <Todo
          key={el.id}
          text={el.text}
          completed={el.completed}
          toggleCompleted={() => dispatch(toggleCompleted(el.id))}
          updateTodo={handleUpdateTodo(el.id)}
          deleteTodo={() => dispatch(deleteTodo(el.id))}
        />
      ))}
    </ul>
  )
}

export default TodoList
