import React from 'react';
import './about.css'; // Import the About page CSS

// Replace with your actual image paths
import Photo1 from './assets/picme.jpg';
import Photo2 from './assets/pictureme.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Hi! I'm Justen Sangabriel, a Computer Science student passionate about tech, coding, and building impactful projects.</p>
      </div>

      <div className="about-content">
        <div className="about-images">
          <div className="about-photo-container">
            <img src={Photo1} alt="Justen's Photo 1" className="about-photo" />
          </div>
          <div className="about-photo-container">
            <img src={Photo2} alt="Justen's Photo 2" className="about-photo" />
          </div>
        </div>

        <div className="about-info">
          <div className="info-container">
            <h2>My Journey🌄</h2>
            <p>
              I'm a second-year CS student at Naga College Foundation, passionate about AI, problem-solving, and software development. I enjoy applying my knowledge to real-world projects.
            </p>
          </div>

          <div className="info-container">
            <h2>Education🏫</h2>
            <p>
              Currently studying Computer Science, focusing on programming, algorithms, AI, and data structures. I love practical learning through projects and exploring new technologies.
            </p>
          </div>

          <div className="info-container">
            <h2>My Projects⚙️</h2>
            <p>
              I fix my bicycle whenever its broken also i like to dissamble things and fix them.
            </p>
          </div>

          <div className="info-container">
            <h2>My Goals🏆</h2>
            <p>
              I aim to become a proficient software developer, specializing in AI and machine learning, and contribute to projects that make a positive impact.
            </p>
          </div>

          <div className="info-container">
            <h2>Fun Facts</h2>
            <ul>
              <li>💻 I’m fascinated by AI and its potential to solve complex problems.</li>
              <li>🎮 I love strategy games, which help sharpen my problem-solving skills.</li>
              <li>🌱 I’m friendly i have bestfriend name ken saycon</li>
              <li>🎯 I aim to contribute to tech projects that positively impact society.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
