import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/icon.css';
import { FaDiscord, FaSlack, FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {List, Card, CardTitle, CardText} from 'react-mdl'
import ReactTooltip from 'react-tooltip'
import ContactItem from './ContactItem'

class SmallContactList extends Component {

  state = {
  }

  // updateContactDimensions = () => {
  //   let fontSize;
  //   let height;
  //   let width;
  //   if( window.innerWidth < 1268 ) {
  //     height = 25
  //     width = 25
  //     fontSize = '8px'
  //   } else if (window.innerWidth < 1396 ) {
  //     height = 30
  //     width = 30
  //     fontSize = '10px'
  //   } else if(window.innerWidth < 1525){
  //     height = 35
  //     width = 35
  //     fontSize = '12px'
  //   }
  //   this.setState({fontSize: fontSize, height: height, width: width})
  //
  // }
  //
  // componentDidMount(){
  //   this.updateContactDimensions()
  //   window.addEventListener('resize', this.updateContactDimensions)
  // }
  //
  // componentWillUnmount(){
  //   window.addEventListener('resize', this.updateContactDimensions)
  // }

  render() {
    return (
      <Card shadow={3} id='small-contact-card'>
        <ReactTooltip place='right' className='icon-tooltips'/>
        <CardTitle expand style={{ height: '40%', color: 'rgba(255,255,255,0.9)', background: 'url(https://res.cloudinary.com/wajahatkarimcom/image/upload/v1518636807/contactme.png)150% #BDF3FE'}}>Contact Me</CardTitle>
        <CardText>
          <List id='small-contact-list'>
            <ContactItem img={<MdEmail/>} subtitle={<span>eric.desimone@cortland.edu</span>} title="email"/>
            <ContactItem img={<FaPhoneSquare/>} subtitle={<span>(347) 804-7316</span>} title="phone"/>
            <ContactItem img={<FaDiscord/>} subtitle={<span>BigDaddyReligion#6629</span>} title="discord"/>
            <ContactItem img={<FaSlack/>} subtitle={<span>@Eric DeSimone</span>} title="slack"/>
          </List>
        </CardText>
       </Card>
    );
  }
}

export default SmallContactList;
