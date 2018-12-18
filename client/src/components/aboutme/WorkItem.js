import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/aboutme.css';
import { ListItem, ListItemContent } from 'react-mdl'
import moment from 'moment'

const WorkItem = ({item}) => {

  const term = () => {
    return `${moment(item.startDate).format('MMM YYYY')} - ${moment(item.endDate).format('MMM YYYY')}`
  }

  console.log(item)

  const combineElements = () => {
    return <><span>{term()}</span><br></br><span>{item.jobTitle}</span></>
  }

  return (
    <ListItem threeLine>
      <ListItemContent subtitle={combineElements()}>{item.title}</ListItemContent>
     </ListItem>
  );
}

export default WorkItem;
