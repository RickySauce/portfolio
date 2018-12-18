import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/aboutme.css';
import Img from '../../download.jpg';
import { Card } from 'react-mdl'
import { myLife } from '../../aboutMe'
import HistorySection from './HistorySection'

class AboutMeContainer extends Component {

  render() {
    return (
      <div style={{position: 'relative', height: '100%'}}>
         <Card id='picture-card' shadow={5}>
          <img src={Img} id='picture'/>
         </Card>
         <div id='about-me-main'>
          <div id='about-me-title'>
            <span>About Me</span>
          </div>
          <p id='about-me-content'>
          {myLife}
          </p>
         </div>
        <HistorySection/>
      </div>
    );
  }
}



export default AboutMeContainer;
