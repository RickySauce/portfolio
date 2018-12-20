import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/technology-icons.css'
import { Link } from 'react-router-dom'
import { Menu, MenuItem, IconButton } from 'react-mdl'
import { MdMenu } from "react-icons/md";

const NavMenu = (props) => {

  return (
    <div id='menu-div'>
      <Menu className='menu-links' target="menu">
          <MenuItem><Link to='/aboutme'>About Me</Link></MenuItem>
          <MenuItem><Link to='/projects'>Projects</Link></MenuItem>
          <MenuItem onClick={props.handleContact}>Contact</MenuItem>
      </Menu>
  </div>
  );
}

export default NavMenu;
