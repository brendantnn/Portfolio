import React from 'react';
import myphoto from '../assets/myphoto.jpg';

const About = () => (
  <section
    id="about"
    style={{
      width: '100%',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      background: `url(${myphoto}) 20% 30%/cover no-repeat`,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Overlay for darkening the image */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(24,24,27,0.55)',
        zIndex: 1,
      }}
    />
    {/* Text content on the left */}
    <div
      style={{
        position: 'relative',
        zIndex: 2,
        color: '#fafafa',
        textAlign: 'left',
        maxWidth: 600,
        marginLeft: '7vw',
        padding: '2.5rem 2rem',
        background: 'rgba(36,36,40,0.75)',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 700,
        marginBottom: '1.2rem',
        color: '#fff',
        letterSpacing: '-0.02em',
        lineHeight: 1.1
      }}>
        Hi, I’m Brendan.
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#bdbdbd',
        fontWeight: 400,
        lineHeight: 1.6,
        marginBottom: 0
      }}>
Hi, I’m Brendan, a passionate Software Engineering student in my second year at the Singapore Institute of Technology. I specialize in AI integration, Java, and Web Development, with a strong interest for software development and all things tech-related. I enjoy exploring how technology can be applied to solve real-world problems and streamline everyday tasks.       <br />
        <br />
        <br />
        Scroll down to see my projects!
      </p>
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        alignItems: 'start',
        gap: '0.5rem',
        background: 'rgba(36,36,40,0.7)',
        borderRadius: 8,
        padding: '0.5rem 1rem',
        width: 'fit-content'
      }}>
        <span style={{
          fontSize: '0.95rem',
          color: '#bdbdbd',
          fontWeight: 500,
          letterSpacing: '0.02em'
        }}>
          Honoured to be featured in
        </span>
        <a
          href="https://www.straitstimes.com/singapore/ai-drone-land-rover-robot-from-ngee-ann-secondary-outsmart-rivals-in-youth-tech-contest"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#4f8cff',
            fontWeight: 600,
            textDecoration: 'underline',
            fontSize: '0.95rem'
          }}
        >
          The Straits Times
        </a>
      </div>
    </div>
  </section>
);

export default About;