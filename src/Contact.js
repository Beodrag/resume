import React from 'react';
import './styles.css';
import githubImage from './github.png';
import linkedinImage from './linkedin.png';
import emailImage from './email.jpeg';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="section-title">Contact</h1>
      <div className="icon-container">
        <a href="https://github.com/Beodrag/" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <img src={githubImage} alt="GitHub" className="contact-image" />
          <p className="contact-text">GitHub</p>
        </a>
        <a href="https://www.linkedin.com/in/alan-xuzhang/" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <img src={linkedinImage} alt="LinkedIn" className="contact-image" />
          <p className="contact-text">LinkedIn</p>
        </a>
        <a href="mailto:alanxuzhang@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <img src={emailImage} alt="Email" className="contact-image" />
          <p className="contact-text">Email</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
