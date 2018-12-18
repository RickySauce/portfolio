import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import AboutMeContainer from './components/aboutme/AboutMeContainer'
import ContactCardWrapper from './components/contact/ContactCardWrapper'
import ProjectContainer from './components/projects/ProjectContainer'
import './App.css';

class App extends Component {

  state = {
    contactOpen: false,
    width: null
  }

  renderContact = () => {
    return this.state.contactOpen ? <ContactCardWrapper/> : null
  }

  handleContact = () => {
    this.setState(prevState => ({
      contactOpen: prevState.contactOpen ? false: true
    }))
  }

  updateDimensions = () => {
    let width;
    if( window.innerWidth < 1200 ) {
      width = 70
    }
    this.setState({width: width})
  }

  componentDidMount(){
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount(){
    window.addEventListener('resize', this.updateDimensions)
  }

  render() {
    return (
      <div className="App">
      <Router>
        <React.Fragment>
          <NavBar handleContact={this.handleContact}/>
          {this.renderContact()}
          <div id='main' style={{width:`${this.state.width}%`}}>
            <Route exact path="/aboutme" component={AboutMeContainer} />
            <Route exact path="/projects" component={ProjectContainer} />
          </div>
        </React.Fragment>
      </Router>
      </div>
    );
  }
}

export default App;
