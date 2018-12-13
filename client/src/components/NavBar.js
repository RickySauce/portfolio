import React from 'react';
import '../css/navbar.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TiDocument} from "react-icons/ti";
import capitalize from '../capitalize'


const NavBar = (props) => {

  return (
  <Navbar default collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/farts">Eric DeSimone</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse >
      <Nav pullLeft>
      <NavItem eventKey={1} componentClass={Link} href='/ww'  to='/ww'> <IoLogoLinkedin className='nav-icon'/></NavItem>
      <NavItem eventKey={2} componentClass={Link} href='/ww'  to='/ww'> <FaGithub className='nav-icon'/></NavItem>
      <NavItem eventKey={3} componentClass={Link} href='/ww'  to='/ww'> <TiDocument className='nav-icon'/></NavItem>
      </Nav>
      <Nav pullRight >
      <NavItem eventKey={1} componentClass={Link} href='/ww'  to='/ww'> vanilla Face</NavItem>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default NavBar
