import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import './App.css';

class App extends Component {

  state = {
    contactOpen: false
  }

  renderContact = () => {
    return this.state.contactOpen ? <Contact/> : null
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
