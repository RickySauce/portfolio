import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/icon.css';
import { FaDiscord, FaSlack, FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {List, Card, CardTitle, CardText} from 'react-mdl'
import ReactTooltip from 'react-tooltip'
import ContactItem from './ContactItem'
import ContactItemStyling from './ContactItemStyling'
import  AvatarVisibility from './AvatarVisibility'

class SmallContactList extends Component {

  state = {
    width: null,
    height: null,
    visibility: null,
    divWidth: null,
    divHeight: null
  }

  updateSmall = () => {
    let height; let width; let visibility; let divWidth; let divHeight;
    if( window.innerWidth < 600 ) {
      height = 25
      width = 25
    } else if (window.innerWidth < 760 ) {
      height = 30
      width = 30
    } else if(window.innerWidth < 860){
      height = 35
      width = 35
    }
    if(window.innerWidth < 684){
      visibility = 'hidden'
    }if(window.innerWidth < 470){
      divWidth = '100%'
      divHeight = '100px'
    }
    this.setState({visibility: visibility, height: height, width: width, divWidth: divWidth, divHeight: divHeight})
  }

  componentDidMount(){
    this.updateSmall()
    window.addEventListener('resize', this.updateSmall)
  }

  componentWillUnmount(){
    window.addEventListener('resize', this.updateSmall)
  }

  render() {
    return (
      <>
      <Card style={{height: this.state.divHeight, width: this.state.divWidth}} shadow={3} id='small-contact-card'>
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
       <ContactItemStyling width={this.state.width} height={this.state.height}/>
       <AvatarVisibility visibility={this.state.visibility}/>
       </>
    );
  }
}

export default SmallContactList;
