import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom';
// import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
// NavLink = superset of Link, adding styling attrs to rendered ele

const NavBar = () => {
  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">Jacqueline Lam</a>
        <div className="justify-content-end" id="navbarDefault" >
          <ul className="navbar-nav">
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/about"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/projects"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >Portfolio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/blog"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >Blog</NavLink>
            </li>
            {/* <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/contact"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >Contact</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;