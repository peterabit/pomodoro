import React from 'react'
import UndoneTodoList from 'features/todos/UndoneTodoList'
import Clock from 'features/clock/Clock'
import ClockControl from 'features/clock/ClockControl'
import TodoInput from 'features/todos/TodoInput'
import Times from 'features/record/Times'

const Index = () => {
  return (
    <>
      <div className="container h-100 d-flex align-items-center">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column flex-md-row justify-content-center align-items-center">
            <Clock className="mr-md-5" />
            <ClockControl />
          </div>
          <div className="col-lg-4 d-none d-md-flex flex-column justify-content-center">
            <Times className="mb-3" />
            <TodoInput outline />
            <UndoneTodoList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
