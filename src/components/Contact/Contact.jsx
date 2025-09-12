import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";

export const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>lets talk</h1>
          <p>I'm ready to take on every project to help me grow</p>
        </div>
        <div className="contact-details">
          <div className="contact-detail">
            <img src={mail_icon} alt="" />
            <p> odurokwartengmickey@gmail.com</p>
          </div>
          <div className="Contact-detail">
            <img src={call_icon} alt="" />
            <p> 0503233052</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon} alt="" />
            <p>Ghana</p>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <label html for="">
            Your Email
          </label>
          <input type="email" placeholder="Enter your email " name="email" />
          <label html for="">
            Write your message here
          </label>
          <textarea
            name="message"
            placeholder="Enter your message here"
            rows="8"
          ></textarea>
          <button type="submit" className="Contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};
