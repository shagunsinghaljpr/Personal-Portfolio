import { useState, useRef } from 'react';
import { personalInfo }     from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  FiMail, FiPhone, FiMapPin, FiSend,
  FiGithub, FiLinkedin, FiTwitter, FiCheck,
} from 'react-icons/fi';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const formRef = useRef(null);

  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' });
  const [status,  setStatus]  = useState('idle'); // idle | sending | success | error
  const [errors,  setErrors]  = useState({});

  /* ── Validation ── */
  const validate = () => {
    const e = {};
    if (!form.name.trim())              e.name    = 'Name is required';
    if (!form.email.trim())             e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.subject.trim())           e.subject = 'Subject is required';
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    // Simulate sending (replace with emailjs.send or fetch call)
    await new Promise(r => setTimeout(r, 2000));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const contactDetails = [
    { icon: FiMail,   label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
    { icon: FiPhone,  label: 'Phone',    value: personalInfo.phone,    href: `tel:${personalInfo.phone}`   },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: '#'                           },
  ];

  const socialLinks = [
    { icon: FiGithub,   href: personalInfo.github,   label: 'GitHub'   },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter,  href: personalInfo.twitter,  label: 'Twitter'  },
  ];

  return (
    <section id="contact" className="py-24 bg-dark-50/50 dark:bg-dark-900/50">
      <div className="section-wrapper" ref={ref}>

        {/* Heading */}
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-center text-primary-500 font-mono font-semibold
                        tracking-widest text-sm mb-3">
            LET'S TALK
          </p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* ── Left Info ── */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>

            {/* Availability Card */}
            <div className="glass-card p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-bold text-dark-900 dark:text-white">
                  Available for Work
                </span>
              </div>
              <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed">
                I'm currently open to freelance projects, full-time roles, and
                exciting collaborations. Let's build something amazing!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 mb-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 glass-card p-4
                             hover:-translate-x-1 transition-transform duration-200
                             group"
                >
                  <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-900/30">
                    <Icon className="text-primary-500" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-dark-400 dark:text-dark-500">{label}</p>
                    <p className="font-semibold text-dark-900 dark:text-white text-sm
                                  group-hover:text-primary-500 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-5">
              <p className="text-sm font-semibold text-dark-900 dark:text-white mb-4">
                Find me on social media
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 p-3 rounded-xl flex items-center justify-center
                               bg-dark-100 dark:bg-dark-700
                               text-dark-600 dark:text-dark-300
                               hover:bg-primary-100 dark:hover:bg-primary-900/30
                               hover:text-primary-500 transition-all duration-200
                               hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Form ── */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
                Send a Message
              </h3>

              {/* Success Banner */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl mb-6
                                bg-green-50 dark:bg-green-900/20 border border-green-200
                                dark:border-green-800 text-green-700 dark:text-green-400
                                animate-in">
                  <FiCheck size={18} />
                  <p className="text-sm font-medium">
                    Message sent successfully! I'll get back to you soon. 🎉
                  </p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <Field
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    error={errors.name}
                    onChange={handleChange}
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    error={errors.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-5">
                  <Field
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="Project collaboration"
                    value={form.subject}
                    error={errors.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-dark-700
                                    dark:text-dark-200 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className={`form-input resize-none ${
                      errors.message ? 'border-red-500 focus:ring-red-500/50' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                  <p className="text-xs text-dark-400 dark:text-dark-500 mt-1 text-right">
                    {form.message.length} / 1000
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`btn-primary w-full justify-center py-4 text-base ${
                    status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30
                                       border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Reusable Field Component ── */
function Field({ label, name, type, placeholder, value, error, onChange }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-dark-700 dark:text-dark-200 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-input ${
          error ? 'border-red-500 focus:ring-red-500/50' : ''
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
