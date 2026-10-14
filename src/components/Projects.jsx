import { useState } from 'react';
import projects, { featuredProjects, otherProjects } from '../projectsData';

function ProjectVisual({ project }) {
  if (project.images?.length) {
    return <div className="project-visual screenshot"><img src={project.images[0]} alt={`${project.title} screenshot`} loading="lazy" /></div>;
  }
  if (project.visual === 'fitness') {
    return (
      <div className="project-visual fitness-visual" aria-label="Diagram of pose landmarks used for push-up detection">
        <span className="visual-label">Pose detection</span>
        <svg viewBox="0 0 300 130" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M65 40 L100 48 L148 61 L205 78 L251 100 M100 48 L106 82 L82 110" />
            <circle cx="49" cy="34" r="15" /><path d="M63 39 L65 40" />
          </g>
          <g fill="currentColor">{[[65,40],[100,48],[148,61],[205,78],[251,100],[106,82],[82,110]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />)}</g>
        </svg>
        <div className="visual-caption"><span>Joint angles</span><span>Reps & form</span></div>
      </div>
    );
  }
  const steps = project.visual === 'podiatry' ? ['Symptom intake', 'AI assessment', 'Appointment'] : project.visual === 'smartbin' ? ['Sense & capture', 'AI inference', 'Servo sorting'] : null;
  if (steps) {
    return (
      <div className={`project-visual workflow-visual ${project.visual}`} aria-label={`${project.title} workflow diagram`}>
        <span className="visual-label">{project.visual === 'podiatry' ? 'Conversation → action' : 'Software → physical action'}</span>
        <div className="workflow">{steps.map((step, index) => <div className="workflow-step" key={step}><span className="workflow-symbol" aria-hidden="true">{index === 0 ? '01' : index === 1 ? '02' : '03'}</span><span>{step}</span></div>)}</div>
        <div className="visual-caption"><span>{project.visual === 'podiatry' ? 'Patient agent workflow' : 'Raspberry Pi pipeline'}</span></div>
      </div>
    );
  }
  return <div className="project-visual text-visual" aria-hidden="true"><span>{project.category}</span><strong>{project.techStack?.slice(0, 2).join(' / ')}</strong></div>;
}

function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card${featured ? ' featured-card' : ''}`}>
      <ProjectVisual project={project} />
      <div className="project-card-content">
        <p className="project-category">{project.status || project.category}</p>
        <h3><a href={`#/projects/${project.id}`}>{project.title}</a></h3>
        <p className="project-description">{project.description}</p>
        {featured && <div className="project-contribution"><span>My contribution</span><p>{project.contribution}</p></div>}
        <ul className="tech-list" aria-label="Technologies">{project.techStack?.slice(0, 4).map(tech => <li key={tech}>{tech}</li>)}</ul>
        <div className="project-card-links">
          <a className="text-link" href={`#/projects/${project.id}`}>View project</a>
          {project.repository && <a className="text-link muted-link" href={project.repository} target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="section container" aria-labelledby="featured-heading">
      <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2 id="featured-heading">Featured projects</h2></div></div>
      <div className="project-grid">{featuredProjects.map(project => <ProjectCard key={project.id} project={project} featured />)}</div>
      <div className="browse-projects"><p>More web, mobile, embedded and software design work.</p><a className="button" href="#/projects">Browse all projects</a></div>
    </section>
  );
}

export default function Projects() {
  const [category, setCategory] = useState('All categories');
  const categories = [...new Set(projects.map(project => project.category))];
  const matches = project => category === 'All categories' || project.category === category;
  const selected = featuredProjects.filter(matches);
  const archive = otherProjects.filter(matches);
  return (
    <div className="container projects-page">
      <section className="page-intro"><a className="text-link" href="#/">Back to home</a><p className="eyebrow">Project collection</p><h1>Projects</h1></section>
      <div className="project-filter"><label htmlFor="project-category">Browse by category</label><select id="project-category" value={category} onChange={event => setCategory(event.target.value)}><option>All categories</option>{categories.map(item => <option key={item}>{item}</option>)}</select><span role="status">{selected.length + archive.length} projects</span></div>
      {selected.length > 0 && <section className="collection-section" aria-labelledby="collection-featured"><h2 id="collection-featured">Featured projects</h2><div className="project-grid">{selected.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>}
      {archive.length > 0 && <section className="collection-section" aria-labelledby="collection-more"><h2 id="collection-more">More projects</h2>{categories.filter(item => archive.some(project => project.category === item)).map(item => <div className="category-group" key={item}><h3>{item}</h3><div className="project-grid">{archive.filter(project => project.category === item).map(project => <ProjectCard key={project.id} project={project} />)}</div></div>)}</section>}
    </div>
  );
}

export function ProjectDetail({ project }) {
  return (
    <article className="container project-detail">
      <a className="text-link" href="#/projects">All projects</a>
      <header className="detail-heading"><p className="eyebrow">{project.status || project.category}</p><h1>{project.title}</h1><p className="detail-description">{project.description}</p><div className="actions">{project.repository && <a className="button primary" href={project.repository} target="_blank" rel="noopener noreferrer">View repository</a>}{project.demo && <a className="button" href={project.demo} target="_blank" rel="noopener noreferrer">{project.demoLabel || 'View demo'}</a>}</div></header>
      {project.visual && <ProjectVisual project={project} />}
      <ul className="tech-list detail-tech" aria-label="Technologies">{project.techStack?.map(tech => <li key={tech}>{tech}</li>)}</ul>
      {project.featured ? <div className="detail-sections"><section><p className="eyebrow">My role</p><h2>{project.role}</h2><p>{project.contribution}</p><ul className="contribution-list">{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></section><section><h2>Technical approach</h2><p>{project.approach}</p></section><section className="project-scope"><h2>Project context</h2><p>{project.scope}</p></section></div> : <section className="detail-sections"><h2>About this project</h2><p className="project-long-description">{project.details || project.description}</p></section>}
      {project.images?.length > 0 && <section className="project-gallery" aria-label="Project screenshots">{project.images.map((image, index) => <img src={image} key={image} loading="lazy" alt={`${project.title} screenshot ${index + 1}`} />)}</section>}
      {project.video && <section className="project-demo"><h2>Project demonstration</h2><video src={project.video} controls preload="metadata" playsInline aria-label={`${project.title} demonstration`}>Your browser does not support embedded video.</video></section>}
      <a className="text-link detail-back" href="#/projects">Explore more projects</a>
    </article>
  );
}
