// Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: justen.sangabriel@gmail.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: Naga City, Philippines</p>
        </div>

        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" placeholder="Write your message here" required></textarea>

            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
