import React from "react";
import "./Navbar.css";
import mtlogo from '../../Asssets/mtlogo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={mtlogo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div class="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
