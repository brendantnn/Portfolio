import React, { useState } from 'react';
import projects from '../projectsData';

const categories = [...new Set(projects.map(p => p.category))];

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" style={{ background: '#18181b', color: '#fafafa', padding: '3rem 0', textAlign: 'center', width: '100%' }}>
      <h2 style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem' }}>Projects</h2>
      {categories.map(category => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#38bdf8', marginBottom: '1rem' }}>{category}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            {projects.filter(p => p.category === category).map(project => (
              <div
                key={project.title}
                style={{
                  background: '#23232a',
                  borderRadius: '8px',
                  padding: '1.5rem 1.5rem 1rem 1.5rem',
                  minWidth: 260,
                  maxWidth: 340,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
                onClick={() => setOpenProject(project)}
              >
                <h4 style={{
                  margin: '0 0 0.5rem 0',
                  fontWeight: 700,
                  textAlign: 'center',
                  width: '100%'
                }}>
                  {project.title}
                </h4>

                <p style={{ fontSize: '0.98rem', color: '#a1a1aa', marginBottom: '0.7rem' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.2rem' }}>
                  {project.techStack && project.techStack.map(tech => (
                    <span key={tech} style={{
                      background: '#18181b',
                      color: '#4f8cff',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      borderRadius: 6,
                      padding: '0.18em 0.7em',
                      marginRight: '0.2em'
                    }}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {openProject && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}
          onClick={() => setOpenProject(null)}
        >
          <div
            style={{
              background: '#23232a',
              padding: '2rem',
              borderRadius: '10px',
              minWidth: 320,
              maxWidth: 500,
              maxHeight: '80vh',
              overflowY: 'auto',
              color: '#fafafa',
              position: 'relative',
              scrollbarWidth: 'thin',
              scrollbarColor: '#4f8cff #23232a'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenProject(null)}
              style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', color: '#fafafa', fontSize: '1.5rem', cursor: 'pointer', zIndex: 1 }}
            >×</button>
            <h2>{openProject.title}</h2>
            <p style={{ color: '#4f8cff', fontWeight: 500, fontSize: '1rem', margin: '0.5rem 0 1.2rem 0' }}>
              {openProject.techStack && openProject.techStack.join(' • ')}
            </p>
<p style={{ textAlign: 'left', whiteSpace: 'pre-wrap' }}>
  {openProject.details || openProject.description}
</p>

            {openProject.images && openProject.images.length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                {openProject.images.map((img, idx) => (
                  <img key={idx} src={img} alt="" style={{ maxWidth: '100%', marginBottom: '0.5rem', borderRadius: '6px' }} />
                ))}
              </div>
            )}
            {openProject.video && (
              <div style={{ marginTop: '1.5rem' }}>
                <video controls style={{ width: '100%', borderRadius: '6px' }}>
                  <source src={openProject.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;