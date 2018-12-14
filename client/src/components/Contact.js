import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../css/icon.css';
import { FaDiscord, FaSlack, FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {List, ListItem, ListItemContent, ListItemAction, Card, CardTitle, CardText} from 'react-mdl'


class Contact extends Component {

  handleClick = (event) => {

  }

  render() {
    return (
      <Card shadow={3} id='contact-card'>
        <CardTitle expand style={{color: '#fff', background: 'url(https://res.cloudinary.com/wajahatkarimcom/image/upload/v1518636807/contactme.png)95% #BDF3FE'}}>Contact Me</CardTitle>
        <CardText>
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
        </CardText>
    </Card>

    );
  }
}

export default Contact;
