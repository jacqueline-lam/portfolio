import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
// import { NavLink } from 'react-router-dom';
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
    //     <NavLink
    //       className='navbar navbar-expand-lg navbar-light bg-light'
    //       // style={{ marginRight: '10px' }}
    //       to="/"
    //       exact
    //       // style={link}
    //       activeStyle={{
    //         background: 'darkblue'
    //       }}
    //     >
    //       Home
    //     </NavLink>
    //     <NavLink
    //       to="/projects"
    //       exact
    //       style={link}
    //       activeStyle={{
    //         background: 'darkblue'
    //       }}
    //     >Portfolio</NavLink>
    //     <NavLink
    //       to="/blog"
    //       exact
    //       style={link}
    //       activeStyle={{
    //         background: 'darkblue'
    //       }}
    //     >Blog</NavLink>
    //   </div>
    // </nav>


    // <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    //   <div className="container">
    //     <a className="navbar-brand js-scroll-trigger" href="#page-top">Logo</a>
    //     <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    //       Menu
    //             <i className="fas fa-bars"></i>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarResponsive">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Home</a></li>
    //         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/projects">Portfolio</a></li>
    //         <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/blog">Blog</a></li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">J.Lam</a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
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
          </ul>
        </div>
      </div>
    </nav>


  )

}

export default NavBar;