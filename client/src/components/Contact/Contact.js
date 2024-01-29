import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p>
        If you have any questions or concerns, feel free to reach out to us.
      </p>
      <ul className="contact-list">
        <li className="contact-list-item">Email: rachitshrm1996.com</li>
        <li className="contact-list-item">Phone: (123) 456-7890</li>
        <li className="contact-list-item">Address: 123 Main Street, Cityville</li>
      </ul>
    </div>
  );
};

export default Contact;
