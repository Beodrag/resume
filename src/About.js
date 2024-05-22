import React from 'react';
import './styles.css';
import downloadIcon from './download.png';

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
        Throughout my time in college, I've strengthened my skills in programming, particularly in creating graphical user interfaces through various projects. One project I have worked on was creating a Google Chrome Extension that vastly improved and optimized my university's registration page. I have also developed a food delivery app for an engineering club on campus. My current plans are to get my Master's in Computer Science and then go headstrong into the industry as a Software Engineer. In my free time, I enjoy rock climbing, working out, and discovering new music.
        </p>
        <a href="https://docs.google.com/document/d/1DnIeO5W099W7ef9W5zNquyuJ_C_OOCdnwO9TyOpE5-g/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-button">
          Resume
          <img src={downloadIcon} alt="Link Icon" className="link-icon" />
        </a>
      </div>
    </div>
  );
}

export default About;
