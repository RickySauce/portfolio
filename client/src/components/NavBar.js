import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../css/navbar.css'
import { Layout, Navigation, Header, Menu, MenuItem, Tooltip } from 'react-mdl'
import { Link } from 'react-router-dom'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub} from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { TiDocument} from "react-icons/ti";

class NavBar extends Component {

  state = {
    contactOpen: false,
    contactStyle: {}
  }

  handleIconClick = (event) => {
    event.preventDefault()
    window.open(event.currentTarget.href)
  }

  handleContact = (event) => {
    if(this.state.contactOpen){
      this.setState({
        contactOpen: false,
        contactStyle: {
        }
      })
    } else {
      this.setState({
        contactOpen: true,
        contactStyle: {
          textDecoration: 'none',
          fontWeight: 'bold'
        }
      })
    }
  }

render(){
  return (
    <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader>
        <Header title={<span>
           <strong id="nav-title">Eric DeSimone</strong>
           <Navigation className='nav-icons'>
           <Tooltip label="Linkedin" position="bottom">
             <a href='https://www.linkedin.com/in/ericdesimone91/' onClick={this.handleIconClick}><IoLogoLinkedin className='nav-icon'/></a>
             </Tooltip>
             <Tooltip label="Github" position="bottom">
             <a href='https://github.com/RickySauce' onClick={this.handleIconClick}> <FaGithub className='nav-icon'/></a>
             </Tooltip>
             <Tooltip label="Résumé" position="bottom">
             <a href='https://drive.google.com/file/d/1X-ARgNxB664NeAdg6givUSp9Ga0PgLYi/view?usp=sharing' onClick={this.handleIconClick}> <TiDocument className='nav-icon'/></a>
             </Tooltip>
           </Navigation>
           </span>}>
            <Navigation className='nav-links'>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/projects'>Projects</Link>
            </Navigation>
            <Link id='contact-link' to='/contact' onClick={this.handleContact} style={this.state.contactStyle}>Contact</Link>
          </Header>
        </Layout>
    </div>
  )
 }
}




export default NavBar
