import React from 'react'
import withFilterTodos from './withFilterTodos'
import TodoList from './TodoList'

const UndoneTodoList = ({ todos, ...attrs }) => {
  const undoneTodos = todos.filter((todo) => !todo.completed)
  return <TodoList todos={undoneTodos} maxHeight="200px" {...attrs} />
}

export default withFilterTodos(UndoneTodoList)
