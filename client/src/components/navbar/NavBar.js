import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import '../../css/navbar.css'
import { Layout, Header, MenuItem, } from 'react-mdl'
import { MdMenu } from "react-icons/md";
import Icons from './Icons'
import Links from './Links'

class NavBar extends Component {

  state = {
    id: null,
    contactOpen: false,
    contactStyle: {}
  }

  updateNavID = () => {
    let id;
    if( window.innerWidth < 700 ) {
      id = 'navbar-small'
    } else {
      id = null
    }
    this.setState({id: id})
  }

  componentDidMount(){
    this.updateNavID()
    window.addEventListener('resize', this.updateNavID)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateNavID)
  }

  handleContact = (event) => {
    event.preventDefault()
    this.props.handleContact()
    if(this.state.contactOpen){
      this.setState({
        contactOpen: false,
        contactStyle: {
        }
      })
    } else {
      this.setState({
        contactOpen: true,
        contactStyle: {
          textDecoration: 'none',
          fontWeight: 'bold'
        }
      })
    }
  }

  renderIcons = () => {
    return this.state.id !== 'navbar-small' ?  <Icons/> : null
  }

  renderLinks = () => {
    return this.state.id !== 'navbar-small' ? <Links handleContact={this.handleContact} style={this.state.contactStyle}/> : <Icons/>
  }

render(){
  return (
    <div style={{height: '64px', width: '100%', position: 'relative'}}>
      <Layout fixedHeader>
        <Header id={this.state.id} title={<span>
           <strong id="nav-title">Eric DeSimone</strong>
           {this.renderIcons()}
           </span>}>
           {this.renderLinks()}
          </Header>
          <MdMenu id='menu' style={{}}/>
        </Layout>
    </div>
  )
 }
}




export default NavBar
