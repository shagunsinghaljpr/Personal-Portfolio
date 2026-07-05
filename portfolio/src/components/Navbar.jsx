import { useState, useEffect } from 'react';
import { useTheme }         from '../context/ThemeContext';
import { useActiveSection } from '../hooks/useScrollAnimation';
import { navLinks, personalInfo } from '../data/portfolioData';
import {
  FiSun, FiMoon, FiMenu, FiX, FiDownload,
} from 'react-icons/fi';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const activeSection = useActiveSection(navLinks.map(l => l.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-dark-950/90 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="section-wrapper">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 group"
            >
              <span className="text-2xl font-black text-gradient">
                {`<`}
                <span className="text-dark-900 dark:text-white">
                  {personalInfo.name.split(' ')[0]}
                </span>
                {`/>`}
              </span>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`nav-link ${
                    activeSection === link.href ? 'active text-primary-600 dark:text-primary-400' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300
                           hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* Resume Button */}
              <a
                href={personalInfo.resume}
                download
                className="hidden sm:flex btn-primary text-sm py-2 px-4"
              >
                <FiDownload size={15} />
                Resume
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="lg:hidden p-2 rounded-lg bg-dark-100 dark:bg-dark-800
                           text-dark-600 dark:text-dark-300 transition-all"
                aria-label="Toggle menu"
              >
                {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white dark:bg-dark-900 border-t border-dark-100 dark:border-dark-800 px-4 py-4 space-y-2">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-dark-600 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-800'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personalInfo.resume}
              download
              className="btn-primary w-full justify-center mt-2"
            >
              <FiDownload size={15} />
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
