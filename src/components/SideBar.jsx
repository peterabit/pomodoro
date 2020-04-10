import React from 'react'

const SideBar = () => {
  return (
    <div className="sidebar bg-pink">
      <div className="nav flex-column justify-content-center h-100">
        <a href="#" className="mb-3 h4 text-white">
          <i className="fas fa-stream"></i>
        </a>
        <a href="#" className="mb-3 h4 text-white">
          <i className="far fa-clock"></i>
        </a>
        <a href="#" className="h4 text-white">
          <i className="fas fa-music"></i>
        </a>
      </div>
    </div>
  )
}

export default SideBar
