import React from "react";
import "./About.css";
import theme_pattern from "../../Asssets/theme_pattern.svg";
import profile_image from "../../Asssets/profile_img.svg";

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
            <p>
              As a fresher React developer, I am passionate about building
              dynamic, responsive web applications. With a strong grasp of
              React's core concepts and hands-on experience in creating various
              projects, I am eager to apply my skills to real-world projects. My
              adaptability and problem-solving mindset drive me to embrace
              challenges and learn new technologies.
            </p>
            <p>
              I look forward to contributing to innovative projects while
              continually improving my front-end development skills.
            </p>
          </div>
          <div class="about-skills">
            <div class="about-skill">
              <p>HTML</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div class="about-skill">
              <p>CSS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div class="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div class="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
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
      </div>
    </div>
  );
};

export default About;
