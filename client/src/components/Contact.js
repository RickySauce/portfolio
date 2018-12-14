import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../App.css';
import {List, ListItem, ListItemContent, ListItemAction, Icon} from 'react-mdl'


class Contact extends Component {

  render() {
    return (
      <List style={{width: '300px'}}>
        <ListItem twoLine>
          <ListItemContent avatar="person" subtitle="62 episodes">Bryan Cranston</ListItemContent>
          <ListItemAction info="Actor">
            <a href="#"><Icon name="star" /></a>
          </ListItemAction>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent avatar="person" subtitle="62 episodes">Aaron Paul</ListItemContent>
          <ListItemAction>
            <a href="#"><Icon name="star" /></a>
          </ListItemAction>
        </ListItem>
        <ListItem twoLine>
          <ListItemContent avatar="person" subtitle="62 episodes">Bob Odenkirk</ListItemContent>
          <ListItemAction>
            <a href="#"><Icon name="star" /></a>
          </ListItemAction>
        </ListItem>
      </List>
    );
  }
}

export default Contact;
