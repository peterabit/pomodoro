import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleCompleted, updateTodo, deleteTodo } from './todosSlice'
import Todo from './Todo'

const selectTodos = ({ todos }) => todos

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const [input, setInput] = useState('')
  const handleChange = (e) => setInput(e.target.value)
  const handleAdd = (e) => {
    if (input === '') return
    dispatch(addTodo(input))
    setInput('')
  }
  const handleUpdateTodo = (id) => (text) => {
    dispatch(updateTodo({ id, text }))
  }
  return (
    <>
      <div className="d-flex">
        <input type="text" value={input} onChange={handleChange} className="form-control border-bottom py-0" />
        <button
          className="ml-2 btn btn-pink btn-sm text-white"
          onClick={handleAdd}
        >
          add
        </button>
      </div>
      <ul className="list-group pt-3">
        {todos.map((el) => (
          <Todo
            key={el.id}
            text={el.text}
            completed={el.completed}
            toggleCompleted={() => dispatch(toggleCompleted(el.id))}
            updateTodo={(text) => handleUpdateTodo(el.id)(text)}
            deleteTodo={() => dispatch(deleteTodo(el.id))}
          />
        ))}
      </ul>
    </>
  )
}

export default TodoList
