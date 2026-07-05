// ─────────────────────────────────────────
//  All your portfolio content lives here.
//  Edit this file to personalise the site.
// ─────────────────────────────────────────

export const personalInfo = {
  name:        "Alex Johnson",
  title:       "Full Stack Developer",
  subtitle:    "I build beautiful, scalable web applications",
  email:       "alex@example.com",
  phone:       "+1 (555) 123-4567",
  location:    "San Francisco, CA",
  github:      "https://github.com/alexjohnson",
  linkedin:    "https://linkedin.com/in/alexjohnson",
  twitter:     "https://twitter.com/alexjohnson",
  resume:      "/resume.pdf",
  avatar:      "👨‍💻",
  bio: `I'm a passionate Full Stack Developer with 5+ years of experience
        crafting high-performance web applications. I love turning complex
        problems into simple, beautiful solutions using modern technologies.`,
  bioExtended: `When I'm not coding, you'll find me hiking in the mountains,
        contributing to open-source projects, or experimenting with new
        technologies. I believe in writing clean, maintainable code that
        stands the test of time.`,
};

export const skills = [
  // Frontend
  { name: "React / Next.js",  level: 95, category: "Frontend",  icon: "⚛️"  },
  { name: "TypeScript",       level: 88, category: "Frontend",  icon: "📘"  },
  { name: "Tailwind CSS",     level: 92, category: "Frontend",  icon: "🎨"  },
  { name: "Vue.js",           level: 78, category: "Frontend",  icon: "💚"  },
  // Backend
  { name: "Node.js / Express",level: 90, category: "Backend",   icon: "🟢"  },
  { name: "Python / Django",  level: 82, category: "Backend",   icon: "🐍"  },
  { name: "PostgreSQL",       level: 85, category: "Backend",   icon: "🐘"  },
  { name: "MongoDB",          level: 80, category: "Backend",   icon: "🍃"  },
  // DevOps
  { name: "Docker / K8s",     level: 75, category: "DevOps",    icon: "🐳"  },
  { name: "AWS / GCP",        level: 72, category: "DevOps",    icon: "☁️"  },
  { name: "CI/CD (GitHub Actions)", level: 85, category: "DevOps", icon: "⚙️" },
  // Tools
  { name: "Git / GitHub",     level: 95, category: "Tools",     icon: "🔧"  },
  { name: "Figma",            level: 70, category: "Tools",     icon: "🎭"  },
  { name: "GraphQL",          level: 78, category: "Tools",     icon: "🔷"  },
];

export const projects = [
  {
    id: 1,
    title:       "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory management, payment processing, and an analytics dashboard.",
    longDesc:    "Built with Next.js 14, featuring server-side rendering, stripe integration, and a custom CMS.",
    tags:        ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    image:       "🛒",
    color:       "from-blue-500 to-cyan-500",
    github:      "https://github.com",
    live:        "https://example.com",
    featured:    true,
    stats: { stars: 234, forks: 45, views: "12K" },
  },
  {
    id: 2,
    title:       "AI Chat Application",
    description: "Real-time AI-powered chat application with multiple language models, conversation history, and custom prompt templates.",
    longDesc:    "Integrates OpenAI GPT-4, Claude, and local LLMs through a unified API.",
    tags:        ["React", "Node.js", "OpenAI", "Socket.io", "MongoDB"],
    image:       "🤖",
    color:       "from-violet-500 to-purple-500",
    github:      "https://github.com",
    live:        "https://example.com",
    featured:    true,
    stats: { stars: 567, forks: 89, views: "28K" },
  },
  {
    id: 3,
    title:       "DevOps Dashboard",
    description: "A comprehensive DevOps monitoring dashboard with real-time metrics, alerting, and deployment pipelines.",
    longDesc:    "Features Kubernetes cluster management, log aggregation, and custom alert rules.",
    tags:        ["Vue.js", "Python", "Docker", "Grafana", "Kubernetes"],
    image:       "📊",
    color:       "from-green-500 to-emerald-500",
    github:      "https://github.com",
    live:        "https://example.com",
    featured:    true,
    stats: { stars: 189, forks: 34, views: "8K" },
  },
  {
    id: 4,
    title:       "Social Media Analytics",
    description: "Analytics platform tracking social media performance across multiple platforms with AI-powered insights.",
    longDesc:    "Processes millions of data points daily with real-time visualisations.",
    tags:        ["React", "D3.js", "FastAPI", "Redis", "PostgreSQL"],
    image:       "📈",
    color:       "from-orange-500 to-red-500",
    github:      "https://github.com",
    live:        "https://example.com",
    featured:    false,
    stats: { stars: 123, forks: 21, views: "5K" },
  },
  {
    id: 5,
    title:       "Blockchain Wallet",
    description: "Secure multi-chain cryptocurrency wallet with DeFi integration and NFT gallery.",
    longDesc:    "Supports Ethereum, Solana, and Polygon with hardware wallet compatibility.",
    tags:        ["React", "Web3.js", "Ethers.js", "Solidity", "IPFS"],
    image:       "🔐",
    color:       "from-yellow-500 to-orange-500",
    github:      "https://github.com",
    live:        "https://example.com",
    featured:    false,
    stats: { stars: 345, forks: 67, views: "18K" },
  },
  {
    id: 6,
    title:       "Design System Library",
    description: "A comprehensive React component library with 100+ components, dark mode, and full accessibility support.",
    longDesc:    "Built with Storybook, tested with Jest, and published to npm.",
    tags:        ["React", "TypeScript", "Storybook", "Jest", "CSS"],
    image:       "🎨",
    color:       "from-pink-500 to-rose-500",
    github:      "https://github.com",
    live:        "https://example.com",
    featured:    false,
    stats: { stars: 892, forks: 156, views: "45K" },
  },
];

export const experiences = [
  {
    id: 1,
    role:        "Senior Full Stack Developer",
    company:     "TechCorp Inc.",
    location:    "San Francisco, CA",
    period:      "2022 – Present",
    type:        "Full-time",
    description: "Lead developer for the core product team, architecting and building scalable microservices handling 10M+ requests/day.",
    highlights: [
      "Reduced API response time by 60% through Redis caching and query optimisation",
      "Led migration from monolith to microservices architecture",
      "Mentored a team of 5 junior developers",
      "Implemented CI/CD pipelines reducing deployment time by 80%",
    ],
    tags: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    role:        "Full Stack Developer",
    company:     "StartupXYZ",
    location:    "Remote",
    period:      "2020 – 2022",
    type:        "Full-time",
    description: "Built the entire product from scratch — frontend to backend — scaling from 0 to 50K users.",
    highlights: [
      "Built real-time features using WebSockets and Redis Pub/Sub",
      "Implemented Stripe payment integration processing $1M+ monthly",
      "Designed and implemented RESTful and GraphQL APIs",
      "Achieved 99.9% uptime using AWS infrastructure",
    ],
    tags: ["Next.js", "Python", "GraphQL", "MongoDB", "GCP"],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 3,
    role:        "Frontend Developer",
    company:     "Digital Agency Co.",
    location:    "New York, NY",
    period:      "2019 – 2020",
    type:        "Full-time",
    description: "Developed responsive web applications and e-commerce solutions for Fortune 500 clients.",
    highlights: [
      "Delivered 20+ client projects on time and within budget",
      "Improved website performance scores from 45 to 95 on Lighthouse",
      "Introduced component-driven development with Storybook",
      "Collaborated with UX designers to implement pixel-perfect designs",
    ],
    tags: ["React", "Vue.js", "SASS", "WordPress", "Shopify"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    role:        "Junior Web Developer",
    company:     "Freelance",
    location:    "Remote",
    period:      "2018 – 2019",
    type:        "Freelance",
    description: "Built websites and web apps for small businesses and startups.",
    highlights: [
      "Completed 30+ freelance projects across various industries",
      "Specialised in React, Node.js, and WordPress development",
      "Built and maintained long-term client relationships",
    ],
    tags: ["HTML/CSS", "JavaScript", "React", "Node.js", "MySQL"],
    color: "from-orange-500 to-red-500",
  },
];

export const stats = [
  { value: "5+",  label: "Years Experience", icon: "📅" },
  { value: "50+", label: "Projects Completed", icon: "🚀" },
  { value: "30+", label: "Happy Clients",     icon: "😊" },
  { value: "10M+",label: "Requests/Day Handled", icon: "⚡" },
];

export const education = [
  {
    degree:  "B.Sc. Computer Science",
    school:  "University of California, Berkeley",
    period:  "2015 – 2019",
    grade:   "GPA: 3.8/4.0",
    icon:    "🎓",
  },
];

export const certifications = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023", icon: "☁️" },
  { name: "Google Cloud Professional", issuer: "Google", year: "2022", icon: "🔷" },
  { name: "Meta React Developer", issuer: "Meta", year: "2022", icon: "⚛️" },
];

export const navLinks = [
  { label: "Home",       href: "hero"       },
  { label: "About",      href: "about"      },
  { label: "Skills",     href: "skills"     },
  { label: "Projects",   href: "projects"   },
  { label: "Experience", href: "experience" },
  { label: "Contact",    href: "contact"    },
];
