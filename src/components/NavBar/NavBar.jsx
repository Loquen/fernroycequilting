import React from 'react';
import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = (props) => {
  let nav = props.user ?
      <>
        <Nav.Link href='/upload' className='NavBar-link justify-content-end'>U P L O A D</Nav.Link>
        <Nav.Link href='' className='NavBar-link justify-content-end' onClick={props.handleLogout}>L O G  O U T</Nav.Link>
      </>
    :
      null

  return (
    <Navbar variant='light' expand="md" className='navbar-custom sticky-top'>
      {/* <Nav activeKey={props.location.pathname} >  */}
      <Navbar.Brand href='/' className='NavBar-link logo-text'>
        {/* <img
          alt='Sit Logo'
          src='/sit.png'
          width='20'
          height='20'
          className='d-inline-block align-top'
        />&nbsp;&nbsp; */}
        {'Fern Royce Quilting '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          
          <Nav.Link href='/about' className='NavBar-link'>A B O U T</Nav.Link>
          <Nav.Link href='/gallery' className='NavBar-link'>G A L L E R Y</Nav.Link>
          <Nav.Link href='/contact' className='NavBar-link'>C O N T A C T</Nav.Link>
          <Nav.Link href='/lecture' className='NavBar-link'>L E C T U R E S</Nav.Link>
          <Nav.Link href='/event' className='NavBar-link'>E V E N T S</Nav.Link>
          {nav}
        </Nav>
      </Navbar.Collapse>
      {/* </Nav> */}
    </Navbar>
  );
};

export default NavBar;