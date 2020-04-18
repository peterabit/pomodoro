import React from 'react'
import UndoneTodoList from 'features/todos/UndoneTodoList'
import Clock from 'features/clock/Clock'
import ClockControl from 'features/clock/ClockControl'
import TodoInput from 'features/todos/TodoInput'
import Times from 'features/record/Times'

const Index = () => {
  return (
    <>
      <div className="container">
        <div className="row vh-100">
          <div className="col-lg-7">
            <div className="d-flex h-100 justify-content-center align-items-center">
              <Clock />
              <ClockControl />
            </div>
          </div>
          <div className="col-lg-4 d-flex flex-column justify-content-center">
            <Times
              className="mb-3"
              style={{
                marginTop: '-75px',
              }}
            />
            <TodoInput outline />
            <UndoneTodoList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
