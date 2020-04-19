import React from 'react'
import FilterTodoList from 'features/todos/FilterTodoList'
import TodoInput from 'features/todos/TodoInput'
import TodoFilterNav from 'features/todos/TodoFilterNav'
import RecordReport from 'features/record/RecordReport'
import ChartController from 'features/record/ChartController'

export default function Report() {
  return (
    <div className="container">
      <div className="row py-4 py-md-7">
        <div className="col-12 mb-3 mb-md-5">
          <h1 className="text-pink">Record</h1>
        </div>
        <div className="col-lg-6">
          <ChartController className="d-flex justify-content-end" />
          <RecordReport />
        </div>
        <div className="col-lg-4 offset-lg-1 pt-3 pt-md-0">
          <TodoInput />
          <div className="pb-3 d-flex align-items-center">
            <TodoFilterNav className="ml-auto" />
          </div>
          <FilterTodoList />
        </div>
      </div>
    </div>
  )
}
