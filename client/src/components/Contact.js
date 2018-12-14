import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../css/icon.css';
import { FaDiscord, FaSlack, FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {List, ListItem, ListItemContent, ListItemAction, Icon} from 'react-mdl'


class Contact extends Component {

  handleClick = (event) => {
    
  }

  render() {
    return (
      <List id='contact-list' style={{width: '350px'}}>
        <ListItem twoLine>
          <ListItemContent avatar={<MdEmail id='email'/>} subtitle="eric.desimone@cortland.edu">Email</ListItemContent>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent avatar={<FaPhoneSquare id='phone'/>} subtitle="(347) 804-7316">Phone</ListItemContent>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent avatar={<FaDiscord id='discord'/>} subtitle="BigDaddyReligion#6629">Discord</ListItemContent>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent avatar={<FaSlack id='slack'/>} subtitle="@Eric DeSimone">Slack</ListItemContent>
        </ListItem>
      </List>
    );
  }
}

export default Contact;
