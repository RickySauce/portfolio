import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/technology-icons.css'
import { Tooltip, Navigation } from 'react-mdl'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaTwitch} from "react-icons/fa";
import { TiDocument} from "react-icons/ti";


const Icons = () => {

  const handleIconClick = (event) => {
    event.preventDefault()
    window.open(event.currentTarget.href)
  }

  return (
    <Navigation className='nav-icons'>
      <Tooltip label="Twitch" position="bottom">
      <a href='https://www.twitch.tv/rickysauc3' onClick={handleIconClick}> <FaTwitch className='nav-icon'/></a>
      </Tooltip>
      <Tooltip label="Linkedin" position="bottom">
      <a href='https://www.linkedin.com/in/ericdesimone91/' onClick={handleIconClick}><IoLogoLinkedin className='nav-icon'/></a>
      </Tooltip>
      <Tooltip label="Github" position="bottom">
      <a href='https://github.com/RickySauce' onClick={handleIconClick}> <FaGithub className='nav-icon'/></a>
      </Tooltip>
      <Tooltip label="Résumé" position="bottom">
      <a href='https://drive.google.com/file/d/1X-ARgNxB664NeAdg6givUSp9Ga0PgLYi/view?usp=sharing' onClick={handleIconClick}> <TiDocument className='nav-icon'/></a>
      </Tooltip>
    </Navigation>
  );
}

export default Icons;
