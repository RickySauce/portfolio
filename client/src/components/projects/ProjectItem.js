import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/technology-icons.css'
import { ListItem, ListItemContent, ListItemAction, Tooltip, Cell, Grid } from 'react-mdl'

const ProjectItem = ({project}) => {

  const mapTechIcons = () => {
    return project.tech.map(tech => <Tooltip label={tech} position='bottom'><em className={`icon-${tech} project-icon`}></em></Tooltip>)
  }

  const handleClick = (event) => {
    event.preventDefault()
    window.open(event.currentTarget.href)
  }

  return (
    <ListItem threeLine>
      <ListItemAction>
        {mapTechIcons()}
      </ListItemAction>
      <ListItemContent subtitle={project.content}><span className='project-title'>{project.title}</span> <Tooltip id='project-github' label='Check out the Repository!' position='right'>
      <a href={project.gitLink} className='icon-github-circle' onClick={handleClick}></a>
      </Tooltip>
      </ListItemContent>
    </ListItem>
  );
}

export default ProjectItem;
