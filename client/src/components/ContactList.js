import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../css/icon.css';
import { FaDiscord, FaSlack, FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {List, Card, CardTitle, CardText} from 'react-mdl'
import ReactTooltip from 'react-tooltip'
import ContactItem from './ContactItem'



class ContactList extends Component {

  render() {
    return (
      <Card shadow={3} id='contact-card'>
        <ReactTooltip place='right' className='icon-tooltips'/>
        <CardTitle expand style={{color: '#fff', background: 'url(https://res.cloudinary.com/wajahatkarimcom/image/upload/v1518636807/contactme.png)95% #BDF3FE'}}>Contact Me</CardTitle>
        <CardText>
          <List id='contact-list' style={{width: '350px'}}>
            <ContactItem img={<MdEmail/>} subtitle="eric.desimone@cortland.edu" title="email"/>
            <ContactItem img={<FaPhoneSquare/>} subtitle="(347) 804-7316" title="phone"/>
            <ContactItem img={<FaDiscord/>} subtitle="BigDaddyReligion#6629" title="discord"/>
            <ContactItem img={<FaSlack/>} subtitle="@Eric DeSimone" title="slack"/>
          </List>
        </CardText>
    </Card>

    );
  }
}

export default ContactList;
