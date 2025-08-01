import React from 'react';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => (
  <header style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 100,
    background: 'rgba(24, 25, 26, 0.35)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    color: '#fff',
    borderBottom: '1px solid rgba(36,36,40,0.12)',
    padding: '0.7rem 0',
    boxSizing: 'border-box',
  }}>
    <nav
  style={{
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap', 
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
  }}
>

      {/* Logo/Name */}
      <div style={{
        fontWeight: 700,
        fontSize: '1.15rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        position: 'relative',
        color: '#fff',
      }}>
        BRENDAN
        <div style={{
          height: 3,
          width: 28,
          background: '#4f8cff',
          borderRadius: 2,
          position: 'absolute',
          left: 0,
          bottom: -6,
        }} />
      </div>
      {/* Nav Links */}
      <div style={{ display: 'flex', gap: '2.2rem',  }}>
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            style={{
              color: '#e5e5e5',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              transition: 'color 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.color = '#4f8cff'}
            onMouseOut={e => e.currentTarget.style.color = '#e5e5e5'}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;