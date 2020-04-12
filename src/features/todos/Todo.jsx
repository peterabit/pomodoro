import React from 'react'
import TextBtn from 'components/TextBtn'

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
      <TextBtn
        className={`pl-0 ${completed ? 'disabled' : ''}`}
        onClick={toggleCompleted}
        style={{ width: '5em' }}
      >
        {completed ? 'done' : 'undone'}
      </TextBtn>
      <input
        type="text"
        value={text}
        onChange={(e) => updateTodo(e.target.value)}
        className={`mr-2 border-0 flex-grow-1`}
        style={{ opacity: completed ? '.5' : '1' }}
      />
      <TextBtn onClick={deleteTodo} className={!completed ? 'disabled' : ''}>
        <i className="fas fa-times"></i>
      </TextBtn>
    </li>
  )
}
