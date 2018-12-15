import React, { Component } from 'react';
import ProjectList from './ProjectList'
import * as techs from '../../projects.js'
import parser from '../../parser.js'


class ProjectGroup extends Component {

  state = {
    projects: []
  }

  render() {
    console.log(this.props.tech)
    console.log(parser(this.props.tech))
    return (
      <div>
      <ProjectList/>
      {console.log(techs[parser(this.props.tech)])}
    </div>
    );
  }
}

export default ProjectGroup;
