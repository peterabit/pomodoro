import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function TodoInput() {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const handleChange = (e) => setInput(e.target.value)
  const handleAdd = (e) => {
    if (input === '') return
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <div className="d-flex mb-3">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="form-control border-bottom py-0"
      />
      <button
        className="ml-2 btn btn-pink btn-sm flex-shrink-0 text-white"
        onClick={handleAdd}
      >
        新增
      </button>
    </div>
  )
}

export default TodoInput
