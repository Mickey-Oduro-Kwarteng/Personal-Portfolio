import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import projects_data from "../../assets/projects_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1> My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {projects_data.map((projects, index) => {
          return <img key={index} src={projects.w_img} alt="" />;
        })}
      </div>
      <div className="projects-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Projects;
