import { personalInfo, navLinks } from '../data/portfolioData';
import {
  FiGithub, FiLinkedin, FiTwitter, FiMail,
  FiHeart, FiArrowUp,
} from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-dark-400 border-t border-dark-800">
      <div className="section-wrapper py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <span className="text-2xl font-black text-white mb-4 block">
              {'<'}{personalInfo.name.split(' ')[0]}{' '}
              <span className="text-gradient">{personalInfo.name.split(' ')[1]}</span>
              {'/>'}
            </span>
            <p className="text-sm leading-relaxed text-dark-500 mb-6">
              {personalInfo.bio.slice(0, 120)}...
            </p>
            <div className="flex gap-3">
              {[
                { icon: FiGithub,   href: personalInfo.github   },
                { icon: FiLinkedin, href: personalInfo.linkedin },
                { icon: FiTwitter,  href: personalInfo.twitter  },
                { icon: FiMail,     href: `mailto:${personalInfo.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-dark-800 text-dark-400
                             hover:bg-primary-600 hover:text-white
                             transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-dark-500 hover:text-primary-400
                               transition-colors hover:translate-x-1 inline-block
                               transition-transform duration-200"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm text-dark-500">
              <p>📧 {personalInfo.email}</p>
              <p>📞 {personalInfo.phone}</p>
              <p>📍 {personalInfo.location}</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between
                        pt-8 border-t border-dark-800 gap-4">
          <p className="text-sm text-dark-600">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-dark-600">
            Made with <FiHeart className="text-red-500 animate-pulse" size={14} /> using React & Tailwind
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-dark-800 text-dark-400
                       hover:bg-primary-600 hover:text-white
                       transition-all duration-200 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
