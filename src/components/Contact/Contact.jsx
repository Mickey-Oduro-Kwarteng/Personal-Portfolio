import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "02501a07-9307-4ee7-a74e-e17099052ab9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="Contact" className="Contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets work together </h1>

          <p>
            I am open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out to
            me through any of the platforms below.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>odurokwartengmickey@gmail.com </p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>0503233052 </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p> Accra-Ghana</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Your name.." />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Your email.." />
          <label htmlFor="">Write your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            {" "}
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
