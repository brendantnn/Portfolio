import React from 'react';

const languageSkills = [
  { name: 'Java', iconClass: 'devicon-java-plain colored' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
  { name: 'Python', iconClass: 'devicon-python-plain colored' },
  { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
  { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
  { name: 'C', iconClass: 'devicon-c-plain colored' },
  { name: 'C++', iconClass: 'devicon-cplusplus-plain colored' },
];

const frameworkSkills = [
  { name: 'React', iconClass: 'devicon-react-original colored' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
  { name: 'Express.js', iconClass: 'devicon-express-original' },
  { name: 'Angular', iconClass: 'devicon-angularjs-plain colored' },
  { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored' },
];

function Skills() {
  const sectionStyle = {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#18181b',
    color: '#fff',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2.5rem',
    marginTop: '1.5rem',
  };

  const skillItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 70,
  };

  const iconStyle = {
    fontSize: '40px',
  };

  const sectionHeaderStyle = {
    fontSize: '28px',
    margin: '40px 0 20px',
    borderBottom: '2px solid #444',
    display: 'inline-block',
    paddingBottom: '5px',
  };

  const renderSkills = (label, skills) => (
    <>
      <h3 style={sectionHeaderStyle}>{label}</h3>
      <div style={rowStyle}>
        {skills.map(skill => (
          <div key={skill.name} style={skillItemStyle}>
            {skill.iconClass ? (
              <i className={skill.iconClass} style={iconStyle}></i>
            ) : (
              <div style={{ fontSize: '14px', color: '#aaa', height: 40, display: 'flex', alignItems: 'center' }}>
                [no icon]
              </div>
            )}
            <div style={{ marginTop: 8 }}>{skill.name}</div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className="skills-section" style={sectionStyle}>
      <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>My Tech Stack</h2>
      {renderSkills('Languages', languageSkills)}
      {renderSkills('Frameworks & Libraries', frameworkSkills)}
    </section>
  );
}

export default Skills;
