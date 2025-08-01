import React from 'react';

const activities = [

    {
        title: "Tech Mentor – National Youth Tech Championship 2025",
        description: "Guided secondary school students in programming AI-driven drones with Python. Featured in The Straits Times for mentoring efforts.",
        date: "Jul 2025",
      },
{
    title: "Teaching Assistant – Object Oriented Programming",
    description: "At the Singapore Institute Of Technology, I assisted software engineering students in understanding and applying Object-Oriented Programming concepts with Java",
    date: "Jan 2025 - Apr 2025",
  },
 
  {
    title: "NUS Guru AI Innovation Challenge Certificate Of Excellence",
    description: "Built a web application with Open AI integration. Job Cupid is an AI job matching platform that streamlines the job hunting process by automating resume-matching, cover letter generation and job application processes",
    date: "Apr 2025",
  },
  {
    title: "SITech Developers Club HackRift Hackathon",
    description: "Paritcipated in the HackRift 2024 hackathon, where I collaborated with my team to deisgn a fake news prediction model and prototype",
    date: "Dec 2024",
  },
  {
    title: "DSTA Brainhack Hackathon",
    description: "Designed a mobile app architecture and wireframe prototype with my team during the BrainHack hackathon.",
    date: "Dec 2024",
  },
];

const Activities = () => {
  return (
    <section
      id="activities"
      style={{
        background: '#18181b',
        color: '#fafafa',
        padding: '6rem 0',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <h2 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem' }}>
        Activities & Involvement
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '0 1rem',
        }}
      >
        {activities.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: '#23232a',
              borderRadius: '8px',
              padding: '1.5rem',
              minWidth: 260,
              maxWidth: 360,
              flex: '1 1 300px',
              textAlign: 'left',
              boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.4rem' }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#a1a1aa', marginBottom: '0.8rem' }}>
              {item.date}
            </p>
            <p style={{ fontSize: '1rem', color: '#d4d4d8' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
