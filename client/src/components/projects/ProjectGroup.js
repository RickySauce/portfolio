import React, { Component } from 'react';
import ProjectList from './ProjectList'

class ProjectGroup extends Component {

  render() {
    return (
      <div>
      {this.props.tech[this.props.activeTab]}
    </div>
    );
  }
}

export default ProjectGroup;
