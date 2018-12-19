import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/projects.css'
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Content} from 'react-mdl'
import ProjectGroup from './ProjectGroup'
import * as techs from '../../projects.js'
import jsParser from '../../jsParser'
import ProjectImage from './ProjectImage'

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

  renderProjectGroup = () => {
    const tech = this.state.techs[this.state.activeTab][Object.keys(this.state.techs[this.state.activeTab])[0]]
    return tech ? <><ProjectGroup tech={tech}/> <ProjectImage img={tech.imageUrl}/></> : null
  }


  render() {
    return (
      <div id='project-container'>
        <Layout fixedHeader fixedTabs>
            <Header>
                <HeaderRow id='tab-title-row' title="Projects" />
                <HeaderTabs className='tab-bar' ripple activeTab={0} onChange={(tabId) => {this.handleChange(tabId)}}>
                  {this.mapTabs()}
                </HeaderTabs>
              </Header>
            <Content>
                <div className="page-content">
                  {this.renderProjectGroup()}
                </div>
            </Content>
        </Layout>
    </div>
    );
  }
}

export default ProjectContainer;
