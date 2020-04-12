import React, { useState, useEffect, useContext } from 'react'
import Collapse from 'react-bootstrap/Collapse'
import TextBtn from './TextBtn'

const ctx = React.createContext()

export const { Provider, Consumer } = ctx

const CollapseNav = ({ id, children, className, ...attrs }) => {
  const [open, setOpen] = useState(false)
  const [collapsing, setCollapsing] = useState(false)
  const [collapseNav, setCollapseNav] = useState(null)

  useEffect(() => {
    const collapseEl = document.querySelector(`#${id}`)
    collapseEl.addEventListener('transitionend', () => setCollapsing(false))
    setCollapseNav(collapseEl)
  }, [])
  useEffect(() => {
    if (collapseNav) {
      if (open) {
        collapseNav.style.width = collapseNav.scrollWidth + 'px'
      } else {
        const activeItem = document.querySelector(
          `#${id} .collapse-item.active`
        )
        activeItem
          ? (collapseNav.style.width = activeItem.scrollWidth + 'px')
          : ''
      }
    }
  }, [open])

  const handleClick = () => {
    setCollapsing(true)
    setOpen(!open)
  }

  return (
    <Provider value={handleClick}>
      <div
        id={id}
        className={`collapse-nav pl-0 mb-0 ${collapsing ? 'collapsing' : ''} ${
          open ? 'show' : ''
        } ${className}`}
        {...attrs}
      >
        {children}
      </div>
    </Provider>
  )
}

CollapseNav.Item = ({ children, className, onClick, active, ...attrs }) => {
  const handleClick = useContext(ctx)
  return (
    <div
      className={`collapse-item ${active ? 'active' : ''} ${className}`}
      onClick={handleClick}
      {...attrs}
    >
      {children}
    </div>
  )
}

export const CollapseItem = CollapseNav.Item
export default CollapseNav
