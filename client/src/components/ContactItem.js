import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../css/icon.css';
import {List, ListItem, ListItemContent } from 'react-mdl'
import copy from 'copy-to-clipboard';
import ReactTooltip from 'react-tooltip'
import capitalize from '../capitalize'

const ContactItem = (props) => {

  const handleClick = (event) => {
      console.log(event)
      console.log(props.img)
    }

    console.log(props.img)

    return (
      <ListItem twoLine>
        <ListItemContent avatar={props.img} subtitle={props.subtitle}>{props.title}</ListItemContent>
      </ListItem>
  )
}

export default ContactItem;
