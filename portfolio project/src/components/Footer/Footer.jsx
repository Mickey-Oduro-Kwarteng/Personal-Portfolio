import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-top">
        <div className="Footer-top-left">
          <p>I'm a frontend developer with 2years of experince</p>
        </div>
        <div className="footer-top-right">
          <div classname="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          2025 Mickey Oduro. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
