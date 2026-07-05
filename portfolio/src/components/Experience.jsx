import { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';

export default function Experience() {
  const [activeId, setActiveId] = useState(1);
  const { ref, isVisible } = useScrollAnimation(0.1);
  const active = experiences.find(e => e.id === activeId);

  return (
    <section id="experience" className="py-24 bg-white dark:bg-dark-950">
      <div className="section-wrapper" ref={ref}>

        {/* Heading */}
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-center text-primary-500 font-mono font-semibold
                        tracking-widest text-sm mb-3">
            WHERE I'VE WORKED
          </p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey — from junior dev to senior engineer.
          </p>
        </div>

        <div className={`grid lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>

          {/* Sidebar — Company List */}
          <div className="space-y-3">
            {experiences.map(exp => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200
                            border-2 ${
                  activeId === exp.id
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-transparent bg-dark-50 dark:bg-dark-900 hover:border-dark-200 dark:hover:border-dark-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${exp.color}`} />
                  <span className={`font-bold text-sm ${
                    activeId === exp.id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-dark-900 dark:text-white'
                  }`}>
                    {exp.company}
                  </span>
                </div>
                <p className={`text-xs pl-6 ${
                  activeId === exp.id
                    ? 'text-primary-500'
                    : 'text-dark-400 dark:text-dark-500'
                }`}>
                  {exp.period}
                </p>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          {active && (
            <div className="lg:col-span-2 glass-card p-8
                            animate-[animateIn_0.4s_ease]">
              {/* Header */}
              <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FiBriefcase className="text-primary-500" size={18} />
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                      {active.role}
                    </h3>
                  </div>
                  <p className="text-primary-500 font-semibold">{active.company}</p>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-xs text-dark-400 dark:text-dark-500">
                      <FiCalendar size={12} /> {active.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-dark-400 dark:text-dark-500">
                      <FiMapPin size={12} /> {active.location}
                    </span>
                  </div>
                </div>

                <span className="tag-chip">{active.type}</span>
              </div>

              {/* Description */}
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
                {active.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-dark-900 dark:text-white mb-4 uppercase tracking-wider">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {active.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle
                        className="text-green-500 flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <span className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-sm font-bold text-dark-900 dark:text-white mb-3 uppercase tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {active.tags.map(tag => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Timeline — mobile */}
        <div className={`mt-16 lg:hidden transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="relative border-l-2 border-primary-200 dark:border-primary-900 pl-8 space-y-10">
            {experiences.map((exp, i) => (
              <div key={exp.id} className="relative">
                {/* Dot */}
                <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4
                                 border-white dark:border-dark-950
                                 bg-gradient-to-br ${exp.color}`} />
                <p className="text-xs text-dark-400 dark:text-dark-500 mb-1">{exp.period}</p>
                <h4 className="font-bold text-dark-900 dark:text-white">{exp.role}</h4>
                <p className="text-primary-500 text-sm">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
