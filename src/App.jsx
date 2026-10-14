import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects, { FeaturedProjects, ProjectDetail } from './components/Projects';
import Contact from './components/Contact';
import Activities from './components/Activities';
import Footer from './components/Footer';
import projects from './projectsData';
import './App.css';

function App() {
  const [location, setLocation] = useState(() => window.location.hash || '#/');
  const mainRef = useRef(null);
  const path = location.startsWith('#/') ? location.slice(1).split('?')[0] : '/';
  const projectId = path.startsWith('/projects/') ? path.slice('/projects/'.length) : null;
  const project = projects.find(item => item.id === projectId);
  const isProjects = path === '/projects';
  const isHome = path === '/';

  useEffect(() => {
    const onHashChange = () => setLocation(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = `${project ? project.title : isProjects ? 'Projects' : 'Software Engineering Portfolio'} | Brendan Tan`;
    const frame = requestAnimationFrame(() => {
      if (location.startsWith('#/')) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        mainRef.current?.focus({ preventScroll: true });
      } else {
        document.getElementById(location.slice(1))?.scrollIntoView();
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location, project, isProjects]);

  return (
    <>
      <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); mainRef.current?.focus(); }}>Skip to content</a>
      <Header isHome={isHome} />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        {isHome ? <>
          <About />
          <FeaturedProjects />
          <Experience />
          <Skills />
          <Activities />
          <Contact />
        </> : isProjects ? <Projects /> : project ? <ProjectDetail project={project} /> : (
          <section className="container page-intro">
            <p className="eyebrow">Page not found</p>
            <h1>Let’s get you back to the work.</h1>
            <a className="button primary" href="#/projects">Browse projects <span aria-hidden="true">→</span></a>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
