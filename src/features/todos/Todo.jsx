import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Todo({
  text,
  completed,
  toggleCompleted,
  updateTodo,
  deleteTodo,
  ...attrs
}) {
  return (
    <li
      className="list-group-item d-flex align-items-center border-0"
      {...attrs}
    >
      <Button
        variant="link"
        className={`${completed ? 'opacity-weak' : ''}`}
        onClick={toggleCompleted}
        style={{ width: '5em' }}
      >
        {completed ? 'done' : 'undone'}
      </Button>
      <input
        variant="link"
        type="text"
        value={text}
        onChange={(e) => updateTodo(e.target.value)}
        className={`mr-2 border-0 flex-grow-1 form-control ${
          completed ? 'opacity-weak' : ''
        }`}
      />
      <Button
        variant="link"
        onClick={deleteTodo}
        className={!completed ? 'opacity-weak' : ''}
      >
        <i className="fas fa-times"></i>
      </Button>
    </li>
  )
}
