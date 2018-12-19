import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import AboutMeContainer from './components/aboutme/AboutMeContainer'
import ContactCardWrapper from './components/contact/ContactCardWrapper'
import ProjectContainer from './components/projects/ProjectContainer'
import './App.css';

class App extends Component {

  state = {
    contactOpen: false,
    width: 75,
    margin: null
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
    let width; let margin;
    if( window.innerWidth < 470  ) {
      width = 100
      margin = '0px'
    }else if (window.innerWidth < 1200) {
      width = 70
    } else {
      width = 75
    }
    this.setState({width: width, margin: margin})
  }

  componentDidMount(){
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    return (
      <div className="App">
      <Router>
        <React.Fragment>
          <NavBar handleContact={this.handleContact}/>
          {this.renderContact()}
          <div id='main' style={{width:`${this.state.width}%`, margin: this.state.margin}}>
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
