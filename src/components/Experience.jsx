import htxLogo from '../assets/htx-logo.png';
import sitLogo from '../assets/sit-logo.png';
import accentureLogo from '../assets/accenture-logo.png';

const experience = [
  {
    role: 'Software Engineering Intern', organisation: 'HTX · Enterprise AI Products', date: 'May 2026 – Apr 2027', logo: htxLogo, logoAlt: 'HTX logo',
    description: 'I build and deploy full-stack applications, implement GitLab CI/CD pipelines, and support service deployments and migrations using Kubernetes and GitOps. I also work on AI agents and agentic workflows to automate engineering tasks and improve software delivery.',
  },
  {
    role: 'Teaching Assistant — Object-Oriented Programming', organisation: 'Singapore Institute of Technology · Part-time', date: 'Jan 2025 – Apr 2025', logo: sitLogo, logoAlt: 'Singapore Institute of Technology logo',
    description: 'Supported weekly OOP labs, guiding students through hands-on application development. Answered questions, clarified concepts and helped students debug their code.',
  },
  {
    role: 'Software Engineering Intern', organisation: 'Accenture · Singapore', date: 'Mar 2020 – Aug 2020', logo: accentureLogo, logoAlt: 'Accenture logo',
    description: 'Worked with a Singapore Government Agency to maintain and improve its e-HR system. Used SAP and ABAP to support maintenance, defect management and service-request handling.',
  },
];

export default function Experience() {
  return <section id="experience" className="experience-section" aria-labelledby="experience-heading"><div className="container section"><div className="section-heading"><div><p className="eyebrow">Experience</p><h2 id="experience-heading">Work experience</h2></div></div><div className="experience-list">{experience.map(item => <article className="experience-item" key={item.organisation}><img src={item.logo} alt={item.logoAlt} width="52" height="52" loading="lazy" /><div className="experience-copy"><div className="experience-heading"><div><h3>{item.role}</h3><p className="experience-organisation">{item.organisation}</p></div><p className="experience-date">{item.date}</p></div><p className="experience-description">{item.description}</p></div></article>)}</div></div></section>;
}
