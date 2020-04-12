import React from 'react'
import FilterTodoList from 'features/todos/FilterTodoList'
import TodoInput from 'features/todos/TodoInput'
import TodoFilterNav from 'features/todos/TodoFilterNav'
import DatePicker from 'components/DatePicker'

export default function Report() {
  return (
    <div className="container">
      <div className="row mt-8">
        <div className="col-7"></div>
        <div className="col-5 col-lg-4">
          <TodoInput />
          <div className="pb-3 d-flex align-items-center justify-content-between">
            <DatePicker />
            <TodoFilterNav />
          </div>
          <FilterTodoList />
        </div>
      </div>
    </div>
  )
}
