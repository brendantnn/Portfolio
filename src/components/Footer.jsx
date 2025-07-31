import React from 'react';

const Footer = () => (
  <footer style={{ background: '#18181b', color: '#a1a1aa', padding: '1rem 0', textAlign: 'center', fontSize: '0.95rem', width: '100%' }}>
    &copy; {new Date().getFullYear()} Brendan Tan
  </footer>
);

export default Footer;