import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/aboutme.css';
import Img from '../../download.jpg';
import { Card, CardTitle, CardText, CardActions, Grid, Cell, Tabs, Tab} from 'react-mdl'
import * as sections from '../../aboutMe'
import jsParser from '../../jsParser'
import AboutMeSection from './AboutMeSection'

class AboutMeContainer extends Component {

  state = {
    activeTab: 0,
    sections: Object.keys(sections).map(section => sections[section])
  }

  mapTabs = () => {
  return Object.keys(sections).map((section, index) => {
      return <Tab key={index}>{jsParser(section)}</Tab>
    })
  }

  render() {
    console.log(this.state.sections[this.state.activeTab])
    return (
      <div>
        <div id='picture-tab-header'>
         <Card id='picture-card' shadow={5}>
          <img src={Img} id='picture'/>
         </Card>
         <Tabs id='francine' activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
             {this.mapTabs()}
         </Tabs>
         </div>
           <AboutMeSection content={this.state.sections[this.state.activeTab]}/>
      </div>
    );
  }
}

export default AboutMeContainer;
