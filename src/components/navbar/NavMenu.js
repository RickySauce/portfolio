import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/technology-icons.css'
import { withRouter } from 'react-router-dom'
import { Menu, MenuItem, IconButton } from 'react-mdl'
import { MdMenu } from "react-icons/md";

const NavMenu = (props) => {

  const handleClick = (event) => {
    props.history.push(event.currentTarget.dataset.href)
  }

  return (
    <div id='menu-div'>
      <Menu className='menu-links' target="menu">
          <MenuItem onClick={handleClick} data-href='/aboutme'> About Me </MenuItem>
          <MenuItem onClick={handleClick} data-href='/projects' > Projects </MenuItem>
          <MenuItem onClick={props.handleContact}>Contact</MenuItem>
      </Menu>
  </div>
  );
}

export default withRouter(NavMenu);
