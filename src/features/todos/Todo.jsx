import React from 'react'

export default function Todo({
  text,
  completed,
  toggleCompleted,
  updateTodo,
  deleteTodo,
  ...attrs
}) {
  const completedStyle = completed ? 'text-pink-light' : 'text-pink'
  const reverseStyle = !completed ? 'text-pink-light' : 'text-pink'
  return (
    <li
      className="list-group-item d-flex align-items-center border-0"
      {...attrs}
    >
      <button
        className={'btn pl-0 ' + completedStyle}
        onClick={toggleCompleted}
        style={{ width: '5em' }}
      >
        {completed ? 'done' : 'undone'}
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => updateTodo(e.target.value)}
        className={`mr-2 border-0 flex-grow-1`}
        style={{ opacity: completed ? '.5' : '1' }}
      />
      <button onClick={deleteTodo} className={'btn ' + reverseStyle}>
        <i className="fas fa-times"></i>
      </button>
    </li>
  )
}
