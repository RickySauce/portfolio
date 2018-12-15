import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../App.css';
import Img from '../download.jpg';
import { Card, CardTitle, CardText, CardActions, Grid, Cell} from 'react-mdl'

class AboutMe extends Component {

  render() {
    return (
      <div>
        <Grid className="demo-grid-ruler">
         <Card id='picture-card' shadow={5}>
          <img src={Img} id='picture'/>
         </Card>
         <Cell col={1}> </Cell>
         <Cell col={4} id='about-me'>
           <p>
            Howdy Partners! Name's Rickalis aka, sauce man, aka big DaddyRelij
           </p>
         </Cell>
         </Grid>
      </div>
    );
  }
}

export default AboutMe;
