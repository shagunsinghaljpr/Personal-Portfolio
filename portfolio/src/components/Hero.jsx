import { useEffect, useState } from 'react';
import { TypeAnimation }       from 'react-type-animation';
import { personalInfo, stats } from '../data/portfolioData';
import {
  FiGithub, FiLinkedin, FiTwitter,
  FiMail, FiArrowDown, FiCode,
} from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub,   href: 'github',   label: 'GitHub'   },
  { icon: FiLinkedin, href: 'linkedin', label: 'LinkedIn' },
  { icon: FiTwitter,  href: 'twitter',  label: 'Twitter'  },
  { icon: FiMail,     href: 'email',    label: 'Email'    },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  const scrollTo = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center
                 overflow-hidden bg-white dark:bg-dark-950"
    >
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full
                      bg-gradient-to-br from-primary-400 to-violet-400
                      opacity-20 dark:opacity-10 blur-3xl animate-blob" />
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full
                      bg-gradient-to-br from-cyan-400 to-blue-400
                      opacity-20 dark:opacity-10 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full
                      bg-gradient-to-br from-pink-400 to-rose-400
                      opacity-15 dark:opacity-10 blur-3xl animate-blob animation-delay-4000" />

      {/* Floating code snippets */}
      <FloatingCode />

      {/* ── Main Content ── */}
      <div className="section-wrapper relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left — Text */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            bg-primary-50 dark:bg-primary-900/30
                            border border-primary-200 dark:border-primary-800
                            text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </div>

            {/* Greeting */}
            <p className="text-lg text-dark-500 dark:text-dark-400 font-mono mb-2">
              Hello World, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4
                           leading-tight tracking-tight">
              <span className="text-dark-900 dark:text-white">
                {personalInfo.name.split(' ')[0]}
              </span>
              {' '}
              <span className="text-gradient">
                {personalInfo.name.split(' ')[1]}
              </span>
            </h1>

            {/* Type Animation */}
            <div className="text-2xl sm:text-3xl font-bold text-dark-600 dark:text-dark-300 mb-6 h-10">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',  2000,
                  'React Specialist',      2000,
                  'UI/UX Enthusiast',      2000,
                  'Open Source Contributor', 2000,
                  'Problem Solver',        2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="text-gradient"
              />
            </div>

            {/* Bio */}
            <p className="text-base lg:text-lg text-dark-500 dark:text-dark-400
                          leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary px-8 py-4 text-base"
              >
                <FiCode size={18} />
                View My Work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-outline px-8 py-4 text-base"
              >
                <FiMail size={18} />
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-sm text-dark-400 dark:text-dark-500">
                Find me on
              </span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={
                    href === 'email'
                      ? `mailto:${personalInfo.email}`
                      : personalInfo[href]
                  }
                  target={href !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800
                             text-dark-600 dark:text-dark-300
                             hover:bg-primary-100 dark:hover:bg-primary-900/30
                             hover:text-primary-600 dark:hover:text-primary-400
                             transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Avatar Card */}
          <div className={`flex-shrink-0 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <AvatarCard />
          </div>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20
                         transition-all duration-700 delay-500 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center
                         hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl font-black text-gradient">{s.value}</div>
              <div className="text-sm text-dark-500 dark:text-dark-400 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-2
                   text-dark-400 dark:text-dark-500
                   hover:text-primary-500 transition-colors animate-bounce-slow"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <FiArrowDown size={20} />
      </button>
    </section>
  );
}

/* ── Avatar Card ── */
function AvatarCard() {
  return (
    <div className="relative group perspective">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br
                      from-primary-500 to-violet-500 blur-2xl opacity-30
                      group-hover:opacity-50 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative glass-card p-8 w-72 lg:w-80
                      group-hover:scale-[1.02] transition-transform duration-500">
        {/* Avatar */}
        <div className="w-40 h-40 mx-auto mb-6 rounded-full
                        bg-gradient-to-br from-primary-400 to-violet-500
                        flex items-center justify-center text-7xl
                        shadow-2xl shadow-primary-500/30
                        animate-float">
          {personalInfo.avatar}
        </div>

        {/* Info */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-dark-900 dark:text-white">
            {personalInfo.name}
          </h3>
          <p className="text-primary-500 font-medium text-sm mt-1">
            {personalInfo.title}
          </p>
          <p className="text-dark-400 dark:text-dark-500 text-xs mt-2">
            📍 {personalInfo.location}
          </p>
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2 justify-center mt-5">
          {['React', 'Node.js', 'TypeScript', 'AWS'].map(skill => (
            <span key={skill} className="tag-chip">{skill}</span>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center justify-center gap-2 mt-5
                        bg-green-50 dark:bg-green-900/20 rounded-xl py-2.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-600 dark:text-green-400 text-xs font-semibold">
            Open to Work
          </span>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full
                      bg-primary-500 opacity-60 animate-pulse" />
      <div className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full
                      bg-violet-500 opacity-60 animate-pulse animation-delay-2000" />
    </div>
  );
}

/* ── Floating Code Snippets ── */
function FloatingCode() {
  const snippets = [
    { code: 'const dev = "awesome"',    top: '15%', left: '5%',   delay: '0s'   },
    { code: 'npm run build',            top: '70%', left: '3%',   delay: '1s'   },
    { code: '<Component />',            top: '25%', right: '4%',  delay: '0.5s' },
    { code: 'git commit -m "feat 🚀"',  top: '75%', right: '5%',  delay: '1.5s' },
    { code: 'useState(null)',           top: '50%', left: '2%',   delay: '2s'   },
  ];

  return (
    <>
      {snippets.map((s, i) => (
        <div
          key={i}
          style={{
            top: s.top, left: s.left, right: s.right,
            animationDelay: s.delay,
          }}
          className="absolute hidden xl:block font-mono text-xs
                     bg-dark-50/80 dark:bg-dark-900/80
                     border border-dark-200 dark:border-dark-700
                     text-primary-500 px-3 py-2 rounded-lg
                     opacity-60 select-none animate-float
                     backdrop-blur-sm whitespace-nowrap"
        >
          {s.code}
        </div>
      ))}
    </>
  );
}
