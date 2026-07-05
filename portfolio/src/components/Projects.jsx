import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  FiGithub, FiExternalLink, FiStar, FiGitBranch, FiEye,
  FiFilter,
} from 'react-icons/fi';

const filters = ['All', 'Featured', 'React', 'Node.js', 'Python'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId,    setHoveredId]    = useState(null);
  const { ref, isVisible } = useScrollAnimation(0.05);

  const filtered = projects.filter(p => {
    if (activeFilter === 'All')      return true;
    if (activeFilter === 'Featured') return p.featured;
    return p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <section id="projects" className="py-24 bg-dark-50/50 dark:bg-dark-900/50">
      <div className="section-wrapper" ref={ref}>

        {/* Heading */}
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-center text-primary-500 font-mono font-semibold
                        tracking-widest text-sm mb-3">
            WHAT I'VE BUILT
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for building great software.
          </p>
        </div>

        {/* Filter */}
        <div className={`flex flex-wrap gap-3 justify-center mb-12
                         transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <FiFilter className="text-dark-400 self-center" size={16} />
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeFilter === f
                  ? 'bg-gradient-to-r from-primary-600 to-violet-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700 border border-dark-200 dark:border-dark-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isVisible={isVisible}
              hovered={hoveredId === project.id}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isVisible, hovered, onHover }) {
  return (
    <div
      className={`group relative glass-card overflow-hidden
                  hover:-translate-y-3 hover:shadow-2xl transition-all duration-400
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full
                           bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700
                           dark:text-yellow-400 text-xs font-bold border
                           border-yellow-200 dark:border-yellow-800">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Image / Emoji Area */}
      <div className={`relative h-48 bg-gradient-to-br ${project.color}
                       flex items-center justify-center overflow-hidden`}>
        <span
          className={`text-7xl transition-transform duration-500 ${
            hovered ? 'scale-125' : 'scale-100'
          }`}
        >
          {project.image}
        </span>

        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center
                         gap-4 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white
                       hover:bg-white/30 transition-all hover:scale-110"
            onClick={e => e.stopPropagation()}
          >
            <FiGithub size={20} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white
                       hover:bg-white/30 transition-all hover:scale-110"
            onClick={e => e.stopPropagation()}
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2
                       group-hover:text-primary-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
        </div>

        {/* Stats + Links */}
        <div className="flex items-center justify-between pt-4
                        border-t border-dark-100 dark:border-dark-700">
          <div className="flex items-center gap-4 text-dark-400 dark:text-dark-500 text-xs">
            <span className="flex items-center gap-1">
              <FiStar size={12} /> {project.stats.stars}
            </span>
            <span className="flex items-center gap-1">
              <FiGitBranch size={12} /> {project.stats.forks}
            </span>
            <span className="flex items-center gap-1">
              <FiEye size={12} /> {project.stats.views}
            </span>
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-dark-400 dark:text-dark-500
                         hover:text-primary-500 hover:bg-primary-50
                         dark:hover:bg-primary-900/20 transition-all"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-dark-400 dark:text-dark-500
                         hover:text-primary-500 hover:bg-primary-50
                         dark:hover:bg-primary-900/20 transition-all"
            >
              <FiExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
