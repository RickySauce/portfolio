import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/aboutme.css';
import { List, Tab, Tabs } from 'react-mdl'
import SchoolItem from './SchoolItem'
import WorkItem from './WorkItem'
import * as sections from '../../aboutMe'

class HistorySection extends Component {

  state = {
    section: sections.workHistory,
    tab: 'School'
  }

  handleClick = () => {
    let section;
    let tab;
    if (this.state.tab === 'School'){
      section = sections.schoolHistory
      tab = 'Work'
    } else {
      section = sections.workHistory
      tab = 'School'
    }
    this.setState({
      section: section,
      tab: tab
    })
  }

  mapListItems = () => {
    return this.state.section.map((item, index) => {
      return item.constructor.name === 'SchoolHistory' ? <SchoolItem key={index} item={item}/> : <WorkItem key={index} item={item}/>
    })
  }

  render(){
    return (
      <div id='about-me-history'>
        <Tabs id='francine' ripple>
            <Tab onClick={this.handleClick}>Switch to {this.state.tab} History</Tab>
        </Tabs>
        <List id='about-me-list'>
          {this.mapListItems()}
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
