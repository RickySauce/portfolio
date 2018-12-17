import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/projects.css'
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Content} from 'react-mdl'
import ProjectGroup from './ProjectGroup'
import * as techs from '../../projects.js'
import jsParser from '../../jsParser'

class ProjectContainer extends Component {

  state = {
    activeTab: 0,
    techs: Object.keys(techs).map(tech => {return {[tech]: techs[tech]}})
  }

  handleChange = (tabId) => {
    this.setState({activeTab: tabId})
  }

  mapTabs = () => {
    return this.state.techs.map((tech,index) => {
      return <Tab key={index}>{jsParser(Object.keys(tech)[0])}</Tab>
    })
  }


  render() {
    console.log(this.state.techs)
    return (
      <div id='project-container'>
        <Layout fixedTabs>
            <Header>
                <HeaderRow id='tab-title-row' title="Projects" />
                <HeaderTabs className='tab-bar' ripple activeTab={0} onChange={(tabId) => {this.handleChange(tabId)}}>
                  {this.mapTabs()}
                </HeaderTabs>
              </Header>
            <Content>
                <div className="page-content">
                  <ProjectGroup tech={this.state.techs[this.state.activeTab]}/>
                </div>
            </Content>
        </Layout>
    </div>
    );
  }
}

export default ProjectContainer;
