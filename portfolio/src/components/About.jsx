import { personalInfo, education, certifications } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  FiUser, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin,
} from 'react-icons/fi';

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const details = [
    { icon: FiMail,    label: 'Email',    value: personalInfo.email    },
    { icon: FiPhone,   label: 'Phone',    value: personalInfo.phone    },
    { icon: FiMapPin,  label: 'Location', value: personalInfo.location },
    { icon: FiGithub,  label: 'GitHub',   value: 'alexjohnson',
      href: personalInfo.github },
    { icon: FiLinkedin,label: 'LinkedIn', value: 'in/alexjohnson',
      href: personalInfo.linkedin },
  ];

  return (
    <section id="about" className="py-24 bg-dark-50/50 dark:bg-dark-900/50">
      <div className="section-wrapper" ref={ref}>

        {/* Heading */}
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-center text-primary-500 font-mono font-semibold
                        tracking-widest text-sm mb-3">
            GET TO KNOW ME
          </p>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer, lifelong learner, and open‑source enthusiast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Bio */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="glass-card p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-900/30">
                  <FiUser className="text-primary-500" size={22} />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                  Who I Am
                </h3>
              </div>

              <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-dark-500 dark:text-dark-400 leading-relaxed text-sm">
                {personalInfo.bioExtended}
              </p>
            </div>

            {/* Contact Details */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-6">
                Contact Details
              </h3>
              <div className="space-y-4">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-dark-100 dark:bg-dark-700 flex-shrink-0">
                      <Icon className="text-primary-500" size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-dark-400 dark:text-dark-500">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-dark-900 dark:text-white
                                     hover:text-primary-500 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-dark-900 dark:text-white">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Education & Certs */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Fun Facts */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { emoji: '☕', label: 'Cups of coffee / week', value: '~20' },
                { emoji: '🌍', label: 'Countries visited',     value: '12'  },
                { emoji: '📚', label: 'Books read this year',  value: '8'   },
                { emoji: '🔧', label: 'Side projects built',   value: '30+' },
              ].map(item => (
                <div
                  key={item.label}
                  className="glass-card p-5 text-center hover:-translate-y-1 transition-transform"
                >
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <div className="text-2xl font-black text-gradient">{item.value}</div>
                  <div className="text-xs text-dark-400 dark:text-dark-500 mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="glass-card p-8 mb-8">
              <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-6">
                🎓 Education
              </h3>
              {education.map((edu, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl
                                  bg-gradient-to-br from-primary-500 to-violet-500
                                  flex items-center justify-center text-xl">
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-500 text-sm font-medium">{edu.school}</p>
                    <p className="text-dark-400 dark:text-dark-500 text-xs mt-1">
                      {edu.period} · {edu.grade}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-6">
                🏆 Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 rounded-xl
                               bg-dark-50 dark:bg-dark-700/50 hover:-translate-x-1
                               transition-transform duration-200"
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-dark-900 dark:text-white">
                        {cert.name}
                      </p>
                      <p className="text-xs text-dark-400 dark:text-dark-500">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="tag-chip">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
