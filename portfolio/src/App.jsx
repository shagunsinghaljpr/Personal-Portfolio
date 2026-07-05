import { useEffect, useState } from 'react';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Skills     from './components/Skills';
import Projects   from './components/Projects';
import Experience from './components/Experience';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

/* ── Custom Cursor ── */
function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = e => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setDot({ x: e.clientX, y: e.clientY }), 80);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div
        className="custom-cursor hidden lg:block"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="custom-cursor-dot hidden lg:block"
        style={{ left: dot.x, top: dot.y }}
      />
    </>
  );
}

/* ── Scroll Progress Bar ── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total  = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress((current / total) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-violet-500 to-pink-500
                   transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ── Back-to-Top Button ── */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-xl
                  bg-gradient-to-br from-primary-600 to-violet-600
                  text-white shadow-lg shadow-primary-500/30
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

/* ── Main App ── */
export default function App() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
