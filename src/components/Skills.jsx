const groups = [
  { title: 'Languages', skills: ['JavaScript', 'Python', 'Java', 'Kotlin', 'C', 'C++', 'HTML', 'CSS'] },
  { title: 'Applications & AI', skills: ['React', 'Node.js', 'Express', 'Angular', 'Bootstrap', 'OpenAI integration', 'ML Kit', 'TensorFlow Lite', 'Firebase'] },
  { title: 'Delivery & infrastructure', skills: ['Git', 'GitLab CI/CD', 'Kubernetes', 'GitOps', 'Linux', 'Raspberry Pi', 'MQTT'] },
];

export default function Skills() {
  return <section id="skills" className="container section" aria-labelledby="skills-heading"><div className="section-heading"><div><p className="eyebrow">Technical skills</p><h2 id="skills-heading">Technical skills</h2></div></div><div className="skills-grid">{groups.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div></section>;
}
