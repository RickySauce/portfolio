import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/projects.css'
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content} from 'react-mdl'
import ProjectGroup from './ProjectGroup'

class ProjectContainer extends Component {

  state = {
    activeTab: 0,
    techs: ['Ruby', 'Ruby on Rails', 'JavaScript', 'React']
  }

  handleChange = (tabId) => {
    this.setState({activeTab: tabId})
  }

  mapTabs = () => {
    return this.state.techs.map(tech =>{
      return <Tab>{tech}</Tab>  })
  }


  render() {
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
