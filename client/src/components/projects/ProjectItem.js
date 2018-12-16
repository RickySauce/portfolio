import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/technology-icons.css'
import { ListItem, ListItemContent, ListItemAction } from 'react-mdl'

const ProjectItem = (props) => {

  return (
    <ListItem threeLine>
      <ListItemAction>
        <a href="#"><em className='icon-ruby'></em></a>
        <a href="#"><em className='icon-ruby'></em></a>
      </ListItemAction>
      <ListItemContent  subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
    </ListItem>
  );
}

export default ProjectItem;
