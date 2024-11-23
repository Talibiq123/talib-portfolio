import React from 'react'
import './navbar.css'
// import logo from '../../Asssets/logo.png'

const Navbar = () => {
  return (
    <div className='container'>
    <div className='navbar'>
        {/* <img src={logo} alt="" className='logo' /> */}
        <a href="#home"><h1>MOHD TALIB</h1></a>
        <ul>
            <li>ABOUT ME</li>
            <li>SKILLS</li>
            <li>PROJECTS</li>
            <li>CONTACT ME</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
