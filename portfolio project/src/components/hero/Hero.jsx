import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Mickey Oduro </span> a Software Engineer based in Ghana
      </h1>
      <p>
        A dedicated and results-driven Software Engineer with practical
        experience in web development, backend systems, and responsive design.
        Strong foundation in software analysis, design, and requirements
        engineering, with the ability to apply technical knowledge to deliver
        efficient and user-centered solution
      </p>
      <div className="hero-action">
        <div className="hero-connect"> Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
