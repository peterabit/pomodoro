import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from 'features/todos/todoSlice'
import CollapseNav, { CollapseItem } from 'components/CollapseNav'
import TextBtn from 'components/TextBtn'

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
              <TextBtn
                className={`p-0 ${active ? '' : 'disabled'}`}
                onClick={() => onClick(el)}
              >
                {el}
              </TextBtn>
            </CollapseItem>
          )
        })}
      </CollapseNav>
    </>
  )
}

export default TodoFilterNav
