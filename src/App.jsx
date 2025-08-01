import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Activities from './components/Activities';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: '#18181b', minHeight: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
