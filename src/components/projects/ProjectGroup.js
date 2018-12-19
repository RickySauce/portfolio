import React from 'react';
import ProjectList from './ProjectList'

const ProjectGroup = ({tech}) => {

  return (
    <div>
    <ProjectList projects={tech.projects}/>
  </div>
  );
}

export default ProjectGroup;
