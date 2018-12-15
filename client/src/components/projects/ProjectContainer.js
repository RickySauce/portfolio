import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/projects.css'
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content} from 'react-mdl'

class ProjectContainer extends Component {


  render() {
    return (
      <div id='project-container'>
        <Layout fixedTabs>
            <Header>
                <HeaderRow id='tab-title-row' title="Projects" />
                <HeaderTabs className='tab-bar' ripple activeTab={1} onChange={(tabId) => {console.log(tabId)}}>
                    <Tab content="heyyy fartstain">Tab1</Tab>
                    <Tab>Tab2</Tab>
                    <Tab>Tab3</Tab>
                </HeaderTabs>
              </Header>
            <Content>
                <div className="page-content">
                You can add logic to update the content of this container based on the "activeTab" receive in the `onChange` callback.
                </div>
            </Content>
        </Layout>
    </div>
    );
  }
}

export default ProjectContainer;
