import React from 'react';
import './styles.css';

function Education() {
  return (
    <div className="education-container">
      <div className="education-column">
        <h1 className="section-title">Education</h1>
        <div className="education-item">
          <h2>M.S. in Computer Science</h2>
          <p>University of California, Riverside</p>
          <p className="date">Expected June 2025</p>
        </div>
        <div className="education-item">
          <h2>B.S. in Computer Science</h2>
          <p>University of California, Riverside</p>
          <p className="date">Expected June 2024</p>
        </div>
        <ul className="education-details">
          <li>GPA: 3.69</li>
          <li>
            <strong>Relevant Coursework:</strong>
            <ul className="sub-list">
              <li>Data Structures and Algorithms</li>
              <li>Software Construction</li>
              <li>Software Testing</li>
              <li>Discrete Mathematics</li>
              <li>Linear Algebra</li>
              <li>Logic Design</li>
              <li>Design of Operating Systems</li>
            </ul>
          </li>
          <li>
            <strong>Honors:</strong>
            <ul className="sub-list">
              <li>Dean’s Honor List (2021, 2022, 2023)</li>
              <li>Chancellor’s Honor List (2021, 2022)</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="skills-column">
        <h1 className="section-title">Technical Skills</h1>
        <ul className="skills-details">
          <li>
            <strong>Programming Languages:</strong>
            <ul className="sub-list">
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </li>
          <li>
            <strong>Web Development:</strong>
            <ul className="sub-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>React</li>
            </ul>
          </li>
          <li>
            <strong>App Development:</strong>
            <ul className="sub-list">
              <li>Flutter</li>
              <li>Dart</li>
            </ul>
          </li>
          <li>
            <strong>Operating Systems:</strong>
            <ul className="sub-list">
              <li>Windows</li>
              <li>MacOS</li>
              <li>Linux</li>
            </ul>
          </li>
          <li>
            <strong>Tools:</strong>
            <ul className="sub-list">
              <li>NatGen</li>
              <li>VS Code</li>
              <li>Git</li>
              <li>Chrome Extension API</li>
              <li>Firebase</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
