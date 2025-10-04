import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              A dedicated and results-driven Software Engineer with practical
              experience in web development, backend systems, and responsive
              design. Strong foundation in software analysis, design, and
              requirements engineering, with the ability to apply technical
              knowledge to deliver efficient and user-centered solution
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>tailwind css</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
        <div className="about-acheivements">
          <div className="about-acheivement">
            <h1>1+</h1>
            <p>YEARS OF EXPERINCE</p>
          </div>
          <hr />
          <div className="about-acheivement">
            <h1>6+</h1>
            <p>PROJECTS</p>
          </div>
          <hr />
          <div className="about-acheivement">
            <h1>6+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
