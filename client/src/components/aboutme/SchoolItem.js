import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/aboutme.css';
import { ListItem, ListItemContent } from 'react-mdl'

const SchoolItem = ({item}) => {

  const term = () => {
    return  item.startDate ? `${item.startDate} - ${item.endDate}` : `${item.endDate}`
  }

  const misc = () => {
    if (item.focus && item.degree) {
      return `${item.degree} , ${item.focus}`
    } else if (item.focus) {
      return item.focus
    } else if (item.degree) {
      return item.degree
    } else {
      return null
    }
  }

  const combineElements = () => {
    if (misc()) {
      return <><span>{term()}</span><br></br><span>{misc()}</span></>
    } else {
      return term()
    }
  }

  console.log(combineElements())

  return (
    <ListItem threeLine>
      <ListItemContent subtitle={combineElements()}>{item.title}</ListItemContent>
     </ListItem>
  );
}

export default SchoolItem;
