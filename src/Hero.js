import React from 'react';
import './styles.css';
import profileImage from './pic.jpg';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={profileImage} alt="Profile" className="animated-image" />
      </div>
      <div className="hero-text">
        <h1>Alan Xu-Zhang</h1>
        <h2>Computer Science Undergraduate</h2>
        <p>
          I'm a student at University of California, Riverside studying to pursue my passion as an innovative Software Engineer.
        </p>
      </div>
    </div>
  );
}

export default Hero;
