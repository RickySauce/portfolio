import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/technology-icons.css'
import { Link } from 'react-router-dom'
import { Menu, MenuItem, IconButton } from 'react-mdl'
import { MdMenu } from "react-icons/md";

const NavMenu = (props) => {

  return (
    <div style={{position: 'relative'}}>
      <Menu id='menu-list' target="menu">
          <MenuItem>Some Action</MenuItem>
          <MenuItem>Another Action</MenuItem>
          <MenuItem disabled>Disabled Action</MenuItem>
          <MenuItem>Yet Another Action</MenuItem>
      </Menu>
  </div>
  );
}

export default NavMenu;
