const activities = [
  { title: 'Tech Mentor — National Youth Tech Championship', date: 'Jul 2025', description: 'Guided secondary school students in programming AI-driven drones with Python. Featured in The Straits Times for mentoring efforts.', link: 'https://www.straitstimes.com/singapore/ai-drone-land-rover-robot-from-ngee-ann-secondary-outsmart-rivals-in-youth-tech-contest' },
  { title: 'NUS Guru AI Innovation Challenge — Certificate of Excellence', date: 'Apr 2025', description: 'Built Job Cupid, a web application with OpenAI integration for résumé matching, cover-letter generation and job-application workflows.' },
  { title: 'SITech Developers Club HackRift Hackathon', date: 'Dec 2024', description: 'Collaborated with my team to design a fake-news prediction model and prototype at HackRift 2024.' },
  { title: 'DSTA BrainHack Hackathon', date: 'Dec 2024', description: 'Designed a mobile-app architecture and wireframe prototype with my team.' },
];

export default function Activities() {
  return <section id="activities" className="container section activities-section" aria-labelledby="activities-heading"><div className="section-heading"><div><p className="eyebrow">Beyond the projects</p><h2 id="activities-heading">Activities & involvement</h2></div></div><div className="activities-grid">{activities.map(item => <article className="activity" key={item.title}><p className="activity-date">{item.date}</p><h3>{item.title}</h3><p>{item.description}</p>{item.link && <a className="text-link" href={item.link} target="_blank" rel="noopener noreferrer">Read the feature</a>}</article>)}</div></section>;
}
