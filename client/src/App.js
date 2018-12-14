import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <React.Fragment>
          <NavBar/>
          <Route exact path="/aboutme" component={AboutMe} />
        </React.Fragment>
      </Router>
      </div>
    );
  }
}

export default App;
