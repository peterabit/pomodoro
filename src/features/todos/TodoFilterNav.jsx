import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from 'features/todos/todoSlice'
import CollapseNav, { CollapseItem } from 'components/CollapseNav'
import Button from 'react-bootstrap/Button'

function TodoFilterNav() {
  const { filter, filterTypes } = useSelector(({ todo }) => ({
    filter: todo.filter,
    filterTypes: todo.filterTypes,
  }))
  const dispatch = useDispatch()
  const onClick = (type) => dispatch(setFilter(type))
  return (
    <>
      <CollapseNav id="todosFilterNav">
        {filterTypes.map((el, i) => {
          const active = filter === el
          return (
            <CollapseItem key={i} active={active}>
              <Button
                variant="link"
                className={`p-0 ${active ? '' : 'opacity-weak'}`}
                onClick={() => onClick(el)}
              >
                {el}
              </Button>
            </CollapseItem>
          )
        })}
      </CollapseNav>
    </>
  )
}

export default TodoFilterNav
