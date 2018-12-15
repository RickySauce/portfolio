import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import ContactList from './components/ContactList'
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
          <Route exact path="/aboutme" component={AboutMe} />
        </React.Fragment>
      </Router>
      </div>
    );
  }
}

export default App;
