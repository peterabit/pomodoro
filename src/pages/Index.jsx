import React from 'react'
import UndoneTodoList from 'features/todos/UndoneTodoList'
import Clock from 'features/clock/Clock'
import ClockControl from 'features/clock/ClockControl'
import TodoInput from 'features/todos/TodoInput'
import Times from 'features/record/Times'

const Index = () => {
  return (
    <>
      <div className="row h-100 align-items-center">
        <div className="col-lg-7 pt-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
          <Clock className="mb-4 mb-md-0 mr-md-5" />
          <ClockControl />
        </div>
        <div className="col-lg-4 d-none d-md-flex flex-column justify-content-center">
          <Times className="mb-3" />
          <TodoInput outline />
          <UndoneTodoList />
        </div>
      </div>
    </>
  )
}

export default Index
