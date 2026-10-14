import myphoto from '../assets/myphoto.jpg';
import ContactIcons from './ContactIcons';

export default function About() {
  return (
    <section id="about" className="hero" aria-labelledby="hero-heading">
      <img className="hero-photo" src={myphoto} alt="Brendan Tan at a technology event" width="960" height="640" fetchPriority="high" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Full stack · AI · Infrastructure</p>
          <h1 id="hero-heading">Brendan Tan.</h1>
          <p className="hero-role">Software Engineering Intern<br />at HTX, Enterprise AI Products.</p>
          <p className="hero-description">Final-year Software Engineering student at SIT. I build full-stack applications and work with AI agents, CI/CD and infrastructure.</p>
          <div className="actions">
            <a className="button primary" href="#featured-projects">View projects <span aria-hidden="true">↗</span></a>
          </div>
          <div className="social-links">
            <ContactIcons />
          </div>
        </div>
      </div>
    </section>
  );
}
