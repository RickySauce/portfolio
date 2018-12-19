import React, { Component } from 'react';
import NormalContactList from './NormalContactList'
import SmallContactList from './SmallContactList'

class ContactCardWrapper extends Component {

  state = {
    size: 'normal'
  }

  renderCard = () => {
    return this.state.size === 'normal' ? <NormalContactList/> : <SmallContactList/>
  }

  updateContactCard = () => {
    let size;
    if( window.innerWidth < 1063 ) {
      size = 'small'
    }else {
      size = 'normal'
    }
    this.setState({size: size})
  }

  componentDidMount(){
    this.updateContactCard()
    window.addEventListener('resize', this.updateContactCard)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateContactCard)
  }


  render(){
      return (
        this.renderCard()
    )
  }
}

export default ContactCardWrapper;
