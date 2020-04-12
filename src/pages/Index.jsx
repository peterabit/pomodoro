import React from 'react'
import UndoneTodoList from 'features/todos/UndoneTodoList'
import Clock from 'features/clock/Clock'
import TodoInput from 'features/todos/TodoInput'

const Index = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-8">
          <div className="col-7">
            <Clock />
          </div>
          <div className="col-4 pt-5 d-flex flex-column justify-content-center">
            <TodoInput />
            <UndoneTodoList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
