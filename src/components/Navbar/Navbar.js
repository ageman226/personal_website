import React, { Component } from 'react'
import Leftnav from './Leftnav'



export class Navbar extends Component {
  componentDidMount() { 
    document.title = "Money";
  }
  render() {
    return (
      <div id='mxrl-header-wrapper'>
          <Leftnav />
      </div>
    )
  }
}

export default Navbar