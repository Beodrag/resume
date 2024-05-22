import React from 'react';
import './styles.css';

function Experience() {
  return (
    <div className="experience-container">
      <h1 className="section-title">Experience</h1>
      <div className="experience-item">
        <h2>Coding Instructor | Java, C++, Flutter <span className="experience-date">Coding Minds, Irvine, CA | August 2023 - Present</span></h2>
        <ul>
          <li>Tutor students 1 on 1 in <strong>Java</strong>, <strong>C++</strong>, and <strong>Python</strong> to improve students' understanding of computer science topics.</li>
          <li>Created personalized instruction, and hands-on projects, and guided students toward mastery of software languages.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h2>Senior Design Project <span className="experience-date">UC-Riverside, Riverside, CA | September 2023 - March 2024</span></h2>
        <p>P.A.L.Z | <a href="https://github.com/UCR-Senior-Design/Palz" target="_blank" rel="noopener noreferrer">github.com/Palz</a></p>
        <ul>
          <li>Collaborating with a team of three other students to create a social networking web app using <strong>Node.js</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.</li>
          <li>Leveraging <strong>Firebase</strong> to create authentication for user accounts and manage a database for their storage.</li>
          <li>Utilizing <strong>Git</strong> as well as Agile methodologies to collaborate with teammates.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h2>R'Registration Plus Extension <span className="experience-date">June 2022 - September 2022</span></h2>
        <p><a href="https://chromewebstore.google.com/detail/rregistration-plus/kbefkihbccnieclaeombehjdpgbjmejf" target="_blank" rel="noopener noreferrer">chromewebstore.com/RRegistration-Plus</a></p>
        <ul>
          <li>Designed a UCR Registration Google Chrome extension with over 150 installs.</li>
          <li>Utilized <strong>JavaScript</strong> to add additional features and redefine the webpage's layout to improve the end-user experience.</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
