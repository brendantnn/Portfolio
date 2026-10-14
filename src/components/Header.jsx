import { useState } from 'react';

export default function Header({ isHome }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Main navigation">
        <a className="wordmark" href={isHome ? '#about' : '#/'} onClick={() => setOpen(false)}>BRENDAN TAN</a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <div id="navigation-links" className={`navigation-links${open ? ' is-open' : ''}`}>
          <a href={isHome ? '#about' : '#/'} aria-current={isHome ? 'page' : undefined} onClick={() => setOpen(false)}>Home</a>
          <a href="#/projects" aria-current={!isHome ? 'page' : undefined} onClick={() => setOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
