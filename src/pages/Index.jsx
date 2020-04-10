import React from 'react'
import TodoList from 'features/todos/TodoList'
import Clock from 'features/clock/Clock'

const Index = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-8">
          <div className="col-7">
            <Clock />
          </div>
          <div className="col-4">
            <TodoList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
