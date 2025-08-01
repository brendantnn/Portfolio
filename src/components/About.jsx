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
        Hi, I’m Brendan, a passionate Software Engineering student in my second year at the Singapore Institute of Technology. I specialize in AI integration, Java, and Web Development, with a strong interest in software development and all things tech-related. I enjoy exploring how technology can be applied to solve real-world problems and streamline everyday tasks.
        <br /><br />
        Scroll down to see my projects!
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
  </section>
);

export default About;
