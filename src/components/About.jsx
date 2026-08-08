import React from 'react';
import myphoto from '../assets/myphoto.jpg';
import '../App.css';

const About = () => (
  <section id="about" style={{ backgroundImage: `url(${myphoto})` }}>
    {/* Overlay for darkening the image */}
    <div className="about-overlay" />
    
    {/* Text content */}
    <div className="about-textbox">
      <h1 className="about-heading">Hi, I’m Brendan.</h1>
      <p className="about-paragraph">
        I am a Software Engineering student in my final year at the Singapore Institute of Technology. 

        I’m passionate about building AI-powered applications and AI agents that solve real-world problems. 
        Currently, I’m expanding my skills in AI agent development and DevOps, with a strong interest in building scalable,
         reliable software systems.
       
        <br /><br />
      </p>
      <div className="about-feature">
        <span className="about-feature-text">Honoured to be featured in </span>
        <a
          href="https://www.straitstimes.com/singapore/ai-drone-land-rover-robot-from-ngee-ann-secondary-outsmart-rivals-in-youth-tech-contest"
          target="_blank"
          rel="noopener noreferrer"
          className="about-feature-link"
        >
          The Straits Times
        </a>
      </div>
    </div>

    {/* Scroll down arrow */}
    <a className="scroll-down-indicator">
  <span className="arrow">&#x25BC;</span>
</a>

  </section>
);

export default About;
