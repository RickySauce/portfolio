import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../css/navbar.css'
import { Footer, FooterSection, FooterLinkList } from 'react-mdl'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { TiDocument} from "react-icons/ti";

const CustFooter = () => {

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
  <div>
  <Footer size="mini">
    <FooterSection type="left">
        <FooterLinkList>
          <a eventKey={1}> <IoLogoLinkedin onClick={clickLinkedIn} className='nav-icon'/></a>
          <a eventKey={2}> <FaGithub onClick={clickGitHub} className='nav-icon'/></a>
          <a eventKey={3}> <TiDocument onClick={clickResume} className='nav-icon'/></a>
        </FooterLinkList>
    </FooterSection>
</Footer>
</div>
  )
}




export default CustFooter
