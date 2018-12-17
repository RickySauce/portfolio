import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import ContactList from './components/ContactList'
import ProjectContainer from './components/projects/ProjectContainer'
import './App.css';

class App extends Component {

  state = {
    contactOpen: false
  }

  renderContact = () => {
    return this.state.contactOpen ? <ContactList/> : null
  }

  handleContact = () => {
    this.setState(prevState => ({
      contactOpen: prevState.contactOpen ? false: true
    }))
  }

  render() {
    return (
      <div className="App">
      <Router>
        <React.Fragment>
          <NavBar handleContact={this.handleContact}/>
          {this.renderContact()}
          <div id='main'>
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/projects" component={ProjectContainer} />
          </div>
        </React.Fragment>
      </Router>
      </div>
    );
  }
}

export default App;
