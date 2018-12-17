import React from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/technology-icons.css'
import { List } from 'react-mdl'
import ProjectItem from './ProjectItem'

const ProjectList = ({projects}) => {

  const mapProjects = () => {
    return projects.map((project,index) => <ProjectItem key={index} project={project}/>)
  }

  return (
    <List style={{width: '100%'}}>
      {mapProjects()}
    </List>
  );
}

export default ProjectList;
