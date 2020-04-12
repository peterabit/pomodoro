import React, { useState, useEffect, useContext } from 'react'

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
        if (activeItem) {
          collapseNav.style.width = activeItem.scrollWidth + 'px'
        }
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

export const CollapseItem = ({ children, className, onClick, active, ...attrs }) => {
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

export default CollapseNav
