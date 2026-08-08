import React from 'react';
import htxLogo from '../assets/htx-logo.png';
import sitLogo from '../assets/sit-logo.png';
import accentureLogo from '../assets/accenture-logo.png';

const experience = [
  {
    role: 'Software Engineer',
    organisation: 'HTX (Home Team Science & Technology Agency)',
    employmentType: 'Internship',
    date: 'May 2026 – Apr 2027',
    description: 'Enterprise AI Products',
    logo: htxLogo,
    logoAlt: 'HTX logo',
  },
  {
    role: 'Teaching Assistant — Object-Oriented Programming',
    organisation: 'Singapore Institute of Technology',
    employmentType: 'Part-time',
    date: 'Jan 2025 – Apr 2025',
    description: 'Supported Software Engineering students in understanding and applying object-oriented programming concepts with Java.',
    logo: sitLogo,
    logoAlt: 'Singapore Institute of Technology logo',
  },
  {
    role: 'Software Engineer',
    organisation: 'Accenture',
    employmentType: 'Internship',
    date: 'Mar 2020 – Aug 2020',
    location: 'Singapore',
    description: 'Worked with a Singapore Government Agency to maintain and improve its e-HR system. Used SAP and ABAP to support maintenance, defect management, and service-request handling.',
    logo: accentureLogo,
    logoAlt: 'Accenture logo',
  },
];

const Experience = () => (
  <section
    id="experience"
    aria-labelledby="experience-heading"
    style={{ background: '#18181b', color: '#fafafa', padding: '6rem 1rem', width: '100%', boxSizing: 'border-box' }}
  >
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <h2 id="experience-heading" style={{ fontSize: '3rem', fontWeight: 600, margin: '0 0 2rem', textAlign: 'center' }}>
        Work Experience
      </h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {experience.map((item) => (
          <article
            key={`${item.organisation}-${item.role}`}
            style={{
              display: 'flex',
              gap: '1rem',
              background: 'linear-gradient(145deg, #27272f 0%, #202026 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderLeft: '3px solid #38bdf8',
              borderRadius: '0 12px 12px 0',
              boxShadow: '0 12px 28px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
              padding: '1.5rem',
              textAlign: 'left',
            }}
          >
            <img
              src={item.logo}
              alt={item.logoAlt}
              width="56"
              height="56"
              style={{ width: 56, height: 56, objectFit: 'contain', borderRadius: 8, flex: '0 0 auto' }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem 1rem', marginBottom: '0.6rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{item.role}</h3>
                  <p style={{ color: '#38bdf8', margin: '0.25rem 0 0', fontWeight: 500 }}>
                    {item.organisation} · {item.employmentType}
                  </p>
                </div>
                <p style={{ color: '#a1a1aa', margin: 0 }}>{item.date}</p>
              </div>
              {item.location && <p style={{ color: '#a1a1aa', margin: '0 0 0.6rem' }}>{item.location}</p>}
              <p style={{ color: '#d4d4d8', lineHeight: 1.6, margin: 0 }}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
