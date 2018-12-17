import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../css/aboutme.css';
import Img from '../download.jpg';
import { Card, CardTitle, CardText, CardActions, Grid, Cell, Tabs, Tab} from 'react-mdl'

class AboutMe extends Component {

  state = {
    activeTab: 0
  }

  render() {
    return (
      <div>
        <div id='picture-tab-header'>
         <Card id='picture-card' shadow={5}>
          <img src={Img} id='picture'/>
         </Card>
         <Tabs id='francine' activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
             <Tab>My Life</Tab>
             <Tab>Work History</Tab>
             <Tab>School History</Tab>
         </Tabs>
         </div>
           <p>
            Howdy Partners! Name's Rickalis aka, sauce man, aka big DaddyRelij
           </p>
      </div>
    );
  }
}

export default AboutMe;
