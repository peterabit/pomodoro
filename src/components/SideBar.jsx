import React from 'react'
import LightNavLink from './LightNavLink'

const SideBar = () => {
  return (
    <div className="sidebar sidebar-dark px-0 bg-pink justify-content-center">
      <LightNavLink to="/report">
        <i className="fas fa-stream"></i>
      </LightNavLink>
      <LightNavLink to="/" className="mt-4">
        <i className="far fa-clock"></i>
      </LightNavLink>
      <LightNavLink to="/ring" className="mt-4">
        <i className="fas fa-music"></i>
      </LightNavLink>
    </div>
  )
}

export default SideBar
