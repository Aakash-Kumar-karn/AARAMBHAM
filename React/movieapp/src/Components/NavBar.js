import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class NavBar extends Component {
  render() {
    return (

      <div style={{display:'flex',padding: '1rem'}}>
        <Link to="/" style={{textDecoration : 'none'}}><h1>Movies App</h1> </Link>
        <Link to="/favourties" style={{textDecoration : 'none'}}><h1 style={{marginLeft:'2rem',marginTop:'rem'}}>Favrouites</h1> </Link>
       
      </div>
    )
  }
}

export default NavBar