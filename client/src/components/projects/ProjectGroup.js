import React, { Component } from 'react';
import ProjectList from './ProjectList'
import * as techs from '../../projects.js'
import parser from '../../parser.js'


class ProjectGroup extends Component {

  render() {
    console.log(parser(this.props.tech))
    return (
      <div>
      <ProjectList projects={techs[parser(this.props.tech)]}/>
    </div>
    );
  }
}

export default ProjectGroup;
