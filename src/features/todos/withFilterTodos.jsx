import React from 'react'
import { useSelector } from 'react-redux'

const selectTodos = ({ todo }) => {
  if (todo.filter === 'all') {
    return todo.todos
  } else if (todo.filter === 'undone') {
    return todo.todos.filter((todo) => !todo.completed)
  } else {
    return todo.todos.filter((todo) => todo.completed)
  }
}

const withFilterTodos = (Component) => ({ ...attrs }) => {
  const todos = useSelector(selectTodos)
  return <Component todos={todos} {...attrs} />
}

export default withFilterTodos
