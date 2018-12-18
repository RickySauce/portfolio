import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/aboutme.css';
import { List, Tab, Tabs } from 'react-mdl'
import SchoolItem from './SchoolItem'
import WorkItem from './WorkItem'
import * as sections from '../../aboutMe'
import jsParser from '../../jsParser'

class HistorySection extends Component {

  state = {
    section: sections.workHistory,
    tab: 'School History'
  }

  handleClick = () => {
    let section;
    let tab;
    if (this.state.tab === 'School History'){
      section = sections.schoolHistory
      tab = 'Work History'
    } else {
      section = sections.workHistory
      tab = 'School History'
    }
    this.setState({
      section: section,
      tab: tab
    })
  }

  render(){
      console.log(this.state)
    return (
      <div id='about-me-history'>
        <Tabs id='francine' ripple>
            <Tab onClick={this.handleClick}>{this.state.tab}</Tab>
            <Tab onClick={this.handleClick}>{this.state.tab}</Tab>
        </Tabs>
        <List>
        </List>
      </div>
    );
  }
}

// <Tabs id='francine' activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
//     {this.mapTabs()}
// </Tabs>

// mapTabs = () => {
// return Object.keys(sections).map((section, index) => {
//     return <Tab key={index}>{jsParser(section)}</Tab>
//   })
// }

// state = {
//   activeTab: 0,
//   sections: Object.keys(sections).map(section => sections[section])
// }

export default HistorySection;
