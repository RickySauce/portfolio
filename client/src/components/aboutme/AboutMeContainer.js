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
    font: null,
    alignment: null,
    indent: null
  }

  updateID = () => {
    let id; let font; let alignment; let indent;
    if( window.innerWidth < 1063 ) {
      id = 'about-me-main-small'
    } else {
      id = null
    } if( window.innerWidth < 800) {
      font = '80%'
      alignment = 'center'
      indent = '0px'
    }
    this.setState({id: id, font: font, alignment: alignment, indent: indent})
  }

  componentDidMount(){
    this.updateID()
    window.addEventListener('resize', this.updateID)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateID)
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
          <p style={{fontSize: this.state.font, textAlign: this.state.alignment, textIndent: this.state.indent}} id='about-me-content'>
          {myLife}
          </p>
         </div>
        <HistorySection/>
      </div>
    );
  }
}



export default AboutMeContainer;
