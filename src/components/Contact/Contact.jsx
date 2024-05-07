import React from "react";

import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-header">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <form>
            <input className="name" type="text" placeholder="Name" />
            <div className="input-wrapper">
              <input className="email" type="email" placeholder="Email" />
              <input className="subject" type="text" placeholder="Subject" />
            </div>
            <textarea
              className="message"
              type="text"
              placeholder="Your message"
            />
            <button>Send Message</button>
          </form>
        </div>
        <div className="contact-details"></div>
      </div>
    </div>
  );
};

export default Contact;
