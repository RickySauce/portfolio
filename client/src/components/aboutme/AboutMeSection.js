import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/aboutme.css';
import { List } from 'react-mdl'

const AboutMeSection = ({content}) => {

const renderTag = () => {
  if (typeof(content) === 'string'){
    return React.createElement(
        `p`,
        {
          className: 'about-me-content',
          style: {textAlign: 'left', margin: 'auto'}
        },
        content
      )
  } else {
    return <span> "hello" </span>
  }
}

  return (
    renderTag()
  );
}

export default AboutMeSection;
