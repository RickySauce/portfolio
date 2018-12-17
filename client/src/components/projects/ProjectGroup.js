import React from 'react';
import ProjectList from './ProjectList'

const ProjectGroup = ({tech}) => {

  debugger;

  return (
    <div>
    <ProjectList projects={tech[Object.keys(tech)[0]].projects}/>
  </div>
  );
}

export default ProjectGroup;
