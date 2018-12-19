import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/aboutme.css';
import Img from '../../download.jpg';
import { Card } from 'react-mdl'
import { myLife } from '../../aboutMe'
import HistorySection from './HistorySection'

class AboutMeContainer extends Component {

  state = {
    id: null,
    font: null
  }

  updateID = () => {
    let id; let font;
    if( window.innerWidth < 1063 ) {
      id = 'about-me-main-small'
    } else {
      id = null
    } if( window.innerWidth < 800) {
      font = '80%'
    }
    this.setState({id: id, font: font})
  }

  componentDidMount(){
    this.updateID()
    window.addEventListener('resize', this.updateID)
  }

  componentWillUnmount(){
    window.addEventListener('resize', this.updateID)
  }

  render() {
    return (
      <div id={this.state.id} style={{position: 'relative', height: '100%'}}>
         <Card id='picture-card' shadow={5}>
          <img src={Img} id='picture'/>
         </Card>
         <div id='about-me-main'>
          <div id='about-me-title'>
            <span>About Me</span>
          </div>
          <p style={{fontSize: this.state.font}} id='about-me-content'>
          {myLife}
          </p>
         </div>
        <HistorySection/>
      </div>
    );
  }
}



export default AboutMeContainer;
