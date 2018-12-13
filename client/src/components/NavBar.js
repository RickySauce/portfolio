import React from 'react';
import '../css/navbar.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaPhoneSquare, FaDiscord, FaSlack} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiDocument} from "react-icons/ti";
import ReactTooltip from 'react-tooltip'


const NavBar = () => {

  const clickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/ericdesimone91/");
  }

  const clickGitHub = () => {
    window.open("https://github.com/RickySauce");
  }

  const clickResume = () => {
    window.open("https://drive.google.com/file/d/1X-ARgNxB664NeAdg6givUSp9Ga0PgLYi/view?usp=sharing")
  }

  return (
  <Navbar default collapseOnSelect>
  <ReactTooltip delayShow={300}/>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Eric DeSimone</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse >
      <Nav pullLeft style={{borderRight: "1px dashed #333"}}>
      <NavItem data-tip="LinkedIn" eventKey={1}> <IoLogoLinkedin onClick={clickLinkedIn} className='nav-icon'/></NavItem>
      <NavItem data-tip="GitHub" eventKey={2}> <FaGithub onClick={clickGitHub} className='nav-icon'/></NavItem>
      <NavItem data-tip="Resume" eventKey={3}> <TiDocument onClick={clickResume} className='nav-icon'/></NavItem>
      </Nav>
      <Nav pullRight style={{borderLeft: "1px dashed #333"}}>
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
