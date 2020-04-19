import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <Navbar
      bg="pink"
      variant="dark"
      className="sidebar px-0 justify-content-center"
    >
      <Nav className="flex-md-column align-items-center">
        <Nav.Link as={NavLink} exact to="/" className="h4 mb-0">
          <i className="far fa-clock"></i>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/report" className="h4 mb-0 ml-4 ml-md-0 mt-md-4">
          <i className="fas fa-stream"></i>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/ring" className="h4 mb-0 ml-4 ml-md-0 mt-md-4">
          <i className="far fa-bell"></i>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default SideBar
