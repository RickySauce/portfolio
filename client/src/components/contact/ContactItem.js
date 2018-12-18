import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/icon.css';
import {ListItem, ListItemContent } from 'react-mdl'
import copy from 'copy-to-clipboard';
import capitalize from '../../capitalize'

const ContactItem = (props) => {

  const handleClick = (event) => {
      copy(props.subtitle)
    }

  const img = React.cloneElement( props.img,
      {
        onClick: handleClick,
        'data-tip': `Copy ${capitalize(props.title)}`,
        'id': props.title
        }
      )

    return (
      <ListItem twoLine className='contact-item'>
        <ListItemContent avatar={img} subtitle={props.subtitle}>{capitalize(props.title)}</ListItemContent>
      </ListItem>
  )
}

export default ContactItem;
