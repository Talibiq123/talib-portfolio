import React from "react";
import "./Hero.css";
// import profile_img from "../../Asssets/profile_img.svg";
// import dp from '../../Asssets/dp.JPG'

const Hero = () => {
  return (
    <div className="hero">
      {/* <img src={profile_img} alt="" /> */}
      {/* <img src={dp} alt="" /> */}
      <h1>Hello, I'm Mohd Talib.</h1>
      <p>
        Hi there! I'm a passionate frontend developer eager to create beautiful,
        responsive, and user-friendly websites. I specialize in turning ideas
        into digital experiences, and I'm constantly learning to enhance my
        skills.
      </p>
      <h2>Let's Create Something Amazing.</h2>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
