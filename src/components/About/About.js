import React from 'react';
import './About.css';
import theme_pattern from '../../Asssets/theme_pattern.svg';
import profile_image from '../../Asssets/profile_img.svg'

const About = () => {
  return (
    <div className="about">
      <div class="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div class="about-sections">
        <div class="about-left">
          <img src={profile_image} alt="profile" />
        </div>
        <div class="about-right">
          <div class="about-para">
            <p>As a fresher React developer, I am enthusiastic about creating dynamic and responsive web applications. With a solid understanding of React's core concepts, including components, props, state management, and lifecycle methods, I am eager to apply my knowledge to real-world projects. I have hands-on experience building user-friendly interfaces and leveraging tools like React Router and context API for efficient application routing and state handling. My strong problem-solving skills and willingness to learn make me adaptable to new challenges and technologies. I am excited to contribute to innovative projects while enhancing my skills in modern front-end development.</p>
            <p>I am passionate about building responsive and interactive web applications. I have a strong grasp of React concepts like components, props, and state management, with hands-on experience in creating user-friendly interfaces. Eager to learn and grow, I am ready to contribute to innovative projects while enhancing my front-end development skills.</p>
          </div>
          <div class="about-skills">
            <div class="about-skill">
              <p>HTML & CSS</p><hr style={{width: "50%"}} />
              <p>CSS</p><hr style={{width: "60%"}} />
              <p>JavaScript</p><hr style={{width: "70%"}} />
              <p>React JS</p><hr style={{width: "80%"}} />
            </div>
          </div>
        </div>
      </div>
      <div class="about-achievements">
        <div class="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF Experience</p>
        </div>
        <hr />
        <div class="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div class="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
