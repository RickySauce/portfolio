import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/technology-icons.css'
import { Link } from 'react-router-dom'
import { Navigation } from 'react-mdl'

const Links = (props) => {

  const handleIconClick = (event) => {
    event.preventDefault()
    window.open(event.currentTarget.href)
  }

  return (
    <>
    <Navigation className='nav-links'>
      <Link to='/aboutme'>About Me</Link>
      <Link to='/projects'>Projects</Link>
    </Navigation>
    <a id='contact-link' onClick={props.handleContact} style={props.style}>Contact</a>
    </>
  );
}

export default Links;
