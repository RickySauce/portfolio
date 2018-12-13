import React from 'react';
import '../css/navbar.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaPhoneSquare, FaDiscord, FaSlack} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiDocument} from "react-icons/ti";


const NavBar = () => {

  return (
  <Navbar default collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Eric DeSimone</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse >
      <Nav pullLeft>
      <NavItem eventKey={1}> <IoLogoLinkedin className='nav-icon'/></NavItem>
      <NavItem eventKey={2}> <FaGithub className='nav-icon'/></NavItem>
      <NavItem eventKey={3}> <TiDocument className='nav-icon'/></NavItem>
      </Nav>
      <Nav pullRight >
      <NavItem eventKey={4} componentClass={Link} href='/'  to='/'> About Me</NavItem>
      <NavItem eventKey={5} componentClass={Link} href='/projects'  to='/projects'> Projects</NavItem>
      <NavDropdown eventKey={6} title="Contact">
      <MenuItem eventKey={6.1}> <FaPhoneSquare className='nav-dropdown-icon'/> (347) 804-7316</MenuItem>
      <MenuItem eventKey={6.2}> <MdEmail className='nav-dropdown-icon'/> eric.desimone@cortland.edu</MenuItem>
      <MenuItem eventKey={6.3}> <FaDiscord className='nav-dropdown-icon'/> BigDaddyReligion#6629</MenuItem>
      <MenuItem eventKey={6.4}> <FaSlack className='nav-dropdown-icon'/> @Eric DeSimone</MenuItem>
      </NavDropdown>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default NavBar
