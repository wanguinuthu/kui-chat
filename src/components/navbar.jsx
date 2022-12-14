import React from 'react'
import Logo from '../assets/chat.png'
import '../styles/main.css'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="nav-left">
        <img id='logo' src={Logo}/>
        <h1>Chat With Me</h1>
      </div>
      <div className="nav-right">
        <h4>Contact Me</h4>
        <h4>Github</h4>
      </div>
    </div>
  )
}

export default Navbar
