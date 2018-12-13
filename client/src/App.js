import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <NavBar/>
      </Router>
      </div>
    );
  }
}

export default App;
