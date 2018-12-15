import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../css/icon.css';
import { FaDiscord, FaSlack, FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {List, ListItem, ListItemContent, ListItemAction, Card, CardTitle, CardText, Tooltip} from 'react-mdl'
import copy from 'copy-to-clipboard';
import ReactTooltip from 'react-tooltip'
import capitalize from '../capitalize'



class Contact extends Component {

  state = {
    email:'eric.desimone@cortland.edu',
    phone: '(347) 804-7316',
    discord: 'BigDaddyReligion#6629',
    slack: '@Eric DeSimone'
  }

  handleClick = (event) => {
    copy(this.state[event.currentTarget.id])
    }


  render() {
    return (
      <Card shadow={3} id='contact-card'>
        <ReactTooltip place='right' className='icon-tooltips'/>
        <CardTitle expand style={{color: '#fff', background: 'url(https://res.cloudinary.com/wajahatkarimcom/image/upload/v1518636807/contactme.png)95% #BDF3FE'}}>Contact Me</CardTitle>
        <CardText>
          <List id='contact-list' style={{width: '350px'}}>
            <ListItem twoLine>
              <ListItemContent avatar={<MdEmail data-tip='Copy Email' onClick={this.handleClick} id='email'/>} subtitle="eric.desimone@cortland.edu">Email</ListItemContent>
            </ListItem>
            <ListItem twoLine>
              <ListItemContent avatar={<FaPhoneSquare data-tip='Copy Phone Number' onClick={this.handleClick} id='phone'/>} subtitle="(347) 804-7316">Phone</ListItemContent>
            </ListItem>
            <ListItem twoLine>
              <ListItemContent avatar={<FaDiscord data-tip='Copy Discord Username and ID' onClick={this.handleClick} id='discord'/>} subtitle="BigDaddyReligion#6629">Discord</ListItemContent>
            </ListItem>
            <ListItem twoLine>
              <ListItemContent avatar={<FaSlack data-tip='Copy Slack Handle' onClick={this.handleClick} id='slack'/>} subtitle="@Eric DeSimone">Slack</ListItemContent>
            </ListItem>
          </List>
        </CardText>
    </Card>

    );
  }
}

export default Contact;
