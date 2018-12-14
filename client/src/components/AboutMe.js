import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../App.css';
import { Card, CardTitle, CardText, CardActions} from 'react-mdl'

class AboutMe extends Component {

  render() {
    return (
      <div className='main mdl-card mdl-shadow--2dp'>
       <Card shadow={0} style={{width: '256px', height: '256px', background: '#3E4EB8'}}>
       <CardText>
       HEY BROS
       </CardText>
       </Card>
      </div>
    );
  }
}

export default AboutMe;
