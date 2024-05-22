import React from 'react';
import './styles.css';

function Miscellaneous() {
  return (
    <div className="experience-container">
      <h1 className="section-title">Miscellaneous</h1>
      <div className="experience-item">
        <h2>Undergraduate Computer Science Researcher</h2>
        <ul>
          <li>Mentoring under Professor Qian Zhang in program synthesis and code generation to validate and implement advanced AI models.</li>
          <li>Utilizing <strong>Python</strong> and <strong>NatGen</strong> to recreate a unique pre-training objective of “Naturalizing” source code, helping the model train from large-scale open-source code without explicit manual supervision.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h2>Software Lead Engineer</h2>
        <ul>
          <li>Leading a division of 3 students in software and hardware development for creating a food delivery car.</li>
          <li>Utilizing <strong>Flutter</strong>, <strong>Dart</strong>, and <strong>Java</strong> to create a scheduling and routing food delivery app.</li>
          <li>Ensuring effective teamwork and performance towards club goals and successful execution of the project.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h2>Red Block Green Block</h2>
        <p><a href="https://devpost.com/software/red-block-green-block" target="_blank" rel="noopener noreferrer">devpost.com/red-block-green-block</a></p>
        <ul>
          <li>Designed and developed a two-player platformer game published on the web.</li>
          <li>Won 2nd place in Cutie Hack 2023 out of about 200 participants.</li>
          <li>Implemented the game physics, logic, and level design using <strong>C++</strong>, <strong>Python</strong>, and <strong>Javascript</strong>.</li>
        </ul>
      </div>
    </div>
  );
}

export default Miscellaneous;
