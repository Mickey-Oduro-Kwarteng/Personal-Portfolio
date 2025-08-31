import React from "react";
import "./Navbar.css";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-img">
        <img src={logo} alt="" />
      </div>

      <ul className="nav-menu">
        <li>Home</li>
        <li>About </li>
        <li>Services</li>
        <li>Contact Me</li>
        <li>Projects</li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
};

export default Navbar;
