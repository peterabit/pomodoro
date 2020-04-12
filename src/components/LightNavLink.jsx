import React from 'react'
import { NavLink } from 'react-router-dom'

function LightNavLink({ children, className, ...attrs }) {
  return (
    <NavLink exact className={`h4 link-light ${className}`} avtiveclassname="active" {...attrs}>
      {children}
    </NavLink>
  )
}

export default LightNavLink
