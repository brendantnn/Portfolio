const links = [
  { type: 'email', title: 'Email', label: 'Email Brendan Tan', href: 'mailto:brendantan098@gmail.com' },
  { type: 'github', title: 'GitHub', label: 'Brendan Tan on GitHub', href: 'https://github.com/brendantnn', external: true },
  { type: 'linkedin', title: 'LinkedIn', label: 'Brendan Tan on LinkedIn', href: 'https://www.linkedin.com/in/brendan-tan-bt/', external: true },
];

export default function ContactIcons() {
  return (
    <>
      {links.map(link => (
        <a className="contact-icon" key={link.type} href={link.href} aria-label={link.label} title={link.title}
          target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {link.type === 'email' && <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>}
            {link.type === 'github' && <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.9a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.8 1.4a13.1 13.1 0 0 0-6.9 0C5.4.7 4.2 1.1 4.2 1.1a5 5 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.2 6.6 6.2 6.9a3.4 3.4 0 0 0-.9 2.7V22" />}
            {link.type === 'linkedin' && <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7.5 10v7M7.5 7v.01M11.5 17v-7M11.5 13a3 3 0 0 1 6 0v4" /></>}
          </svg>
        </a>
      ))}
    </>
  );
}
