import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Mickey Oduro Kwarteng </span> a Software Engineer based in
        Ghana
      </h1>
      <p>
        A dedicated and results-driven Software Engineer with practical
        experience in web development, backend systems, and responsive design.
        Strong foundation in software analysis, design, and requirements
        engineering, with the ability to apply technical knowledge to deliver
        efficient and user-centered solution
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact me">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
