import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom';
// import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
// NavLink = superset of Link, adding styling attrs to rendered ele
const NavBar = () => {
  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  return (
    // <nav className=''>
    //   <div id='navbar' className='nav-wrapper'>
    //     {/* style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }} */}

    //     {/* set exact so it knows to only set activeStyle when route is deeply equal to link */}
    // <NavLink
    //   className='navbar navbar-expand-lg navbar-light bg-light'
    //   // style={{ marginRight: '10px' }}
    //   to="/"
    //   exact
    //   // style={link}
    //   activeStyle={{
    //     background: 'darkblue'
    //   }}
    // >
    //       Home
    //     </NavLink>
    // <NavLink
    //   to="/projects"
    //   exact
    //   style={link}
    //   activeStyle={{
    //     background: 'darkblue'
    //   }}
    // >Portfolio</NavLink>
    // <NavLink
    //   to="/blog"
    //   exact
    //   style={link}
    //   activeStyle={{
    //     background: 'darkblue'
    //   }}
    // >Blog</NavLink>
    //   </div>
    // </nav>


    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">Jacqueline Lam</a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault" >
          <ul className="navbar-nav">
            <li className='nav-item'>
              <NavLink
                className='nav-link js-scroll'
                // style={{ marginRight: '10px' }}
                to="/"
                exact
                // style={link}
                activeStyle={{
                  color: 'darkblue'
                }}
              >Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link js-scroll'
                to="/about"
                exact
                // style={link}
                activeStyle={{
                  color: 'darkblue'
                }}
              >About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link js-scroll'
                to="/projects"
                exact
                // style={link}
                activeStyle={{
                  color: 'darkblue'
                }}
              >Portfolio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link js-scroll'
                to="/blog"
                exact
                // style={link}
                activeStyle={{
                  color: 'darkblue'
                }}
              >Blog</NavLink>
            </li>
          </ul>
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="/contact">Contact</a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>


  )

}

export default NavBar;