import { useState } from 'react';
import { skills } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Tools'];

export default function Skills() {
  const [activeTab,  setActiveTab]  = useState('All');
  const { ref, isVisible } = useScrollAnimation(0.1);

  const filtered = activeTab === 'All'
    ? skills
    : skills.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-950">
      <div className="section-wrapper" ref={ref}>

        {/* Heading */}
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-center text-primary-500 font-mono font-semibold
                        tracking-widest text-sm mb-3">
            WHAT I WORK WITH
          </p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A curated collection of tools and technologies I've mastered over 5+ years.
          </p>
        </div>

        {/* Tab Filter */}
        <div className={`flex flex-wrap gap-3 justify-center mb-12
                         transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-primary-600 to-violet-600 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Tech Logos Marquee */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-center text-dark-400 dark:text-dark-500 text-sm mb-6">
            Technologies I work with daily
          </p>
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index, isVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`glass-card p-5 cursor-default
                  hover:-translate-y-2 hover:shadow-2xl transition-all duration-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <div>
            <p className="font-semibold text-dark-900 dark:text-white text-sm">
              {skill.name}
            </p>
            <p className="text-xs text-dark-400 dark:text-dark-500">
              {skill.category}
            </p>
          </div>
        </div>
        <span className={`text-lg font-black transition-all duration-300 ${
          hovered ? 'text-primary-500 scale-110' : 'text-dark-400 dark:text-dark-500'
        }`}>
          {skill.level}%
        </span>
      </div>

      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>

      {/* Level label */}
      <p className="text-xs text-dark-400 dark:text-dark-500 mt-2 text-right">
        {skill.level >= 90 ? '⭐ Expert'
          : skill.level >= 75 ? '💪 Advanced'
          : skill.level >= 60 ? '👍 Intermediate'
          : '📚 Learning'}
      </p>
    </div>
  );
}

function TechMarquee() {
  const techs = [
    '⚛️ React', '📘 TypeScript', '🟢 Node.js', '🐍 Python',
    '☁️ AWS', '🐳 Docker', '🍃 MongoDB', '🐘 PostgreSQL',
    '🔷 GraphQL', '🎨 Figma', '⚙️ GitHub Actions', '🚀 Next.js',
  ];
  const doubled = [...techs, ...techs];

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10
                      bg-gradient-to-r from-white dark:from-dark-950 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10
                      bg-gradient-to-l from-white dark:from-dark-950 to-transparent" />

      <div className="flex gap-6 animate-[marquee_25s_linear_infinite] w-max">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="flex-shrink-0 px-4 py-2 rounded-xl
                       bg-dark-100 dark:bg-dark-800
                       text-dark-600 dark:text-dark-300
                       text-sm font-medium border border-dark-200 dark:border-dark-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
