import React from 'react';
import './Hobbies.css'; // Make sure to create a separate CSS file for hobbies

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h2 className="section-title">My Hobbies</h2>
      <div className="hobbies-container">
        <div className="hobby-item">
          <h3>Basketball🏀</h3>
          <p>
            I love playing basketball as it keeps me active, improves teamwork skills, and helps me unwind.
          </p>
        </div>
        <div className="hobby-item">
          <h3>Biking🚵‍♀️</h3>
          <p>
            Biking is one of my favorite hobbies. I enjoy exploring new routes and being out in nature while staying fit.
          </p>
        </div>
        <div className="hobby-item">
          <h3>Learning to Code💻</h3>
          <p>
            I am passionate about programming and always seek to learn new languages and technologies to improve my skills.
          </p>
        </div>
        <div className="hobby-item">
          <h3>Being a Nice Person🤵</h3>
          <p>
            I believe in kindness and helping others whenever possible, which makes a positive impact on those around me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
