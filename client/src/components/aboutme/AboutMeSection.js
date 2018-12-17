import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/aboutme.css';
import { List } from 'react-mdl'
import SchoolItem from './SchoolItem'

const AboutMeSection = ({content}) => {

const renderTag = () => {
  if (typeof(content) === 'string'){
    return React.createElement(
        `p`,
        {
          className: 'about-me-content'
        },
        content
      )
  } else {
    const listItems =  content.map((item,index) => {
      if (item.constructor.name === 'SchoolHistory') {
        return <SchoolItem key={index} item={item}/>
      } else {
        return <SchoolItem key={index} item={item}/>
      }
    })
    return <List className='about-me-list'> {listItems} </List>
  }
}

  return (
    renderTag()
  );
}

export default AboutMeSection;
