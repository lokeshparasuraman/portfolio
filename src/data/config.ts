export const siteConfig = {
  name: "Lokesh Parasuraman",
  role: "Software Developer",
  email: "lokeshofficial0114@gmail.com",
  github: "https://github.com/lokeshparasuraman",
  linkedin: "https://linkedin.com/in/lokeshparasuraman",
  resume: "/resume.pdf",
  description: "I'm a software developer based in India, building clean web interfaces, secure backends, and modular tools.",
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: 'Fly-Fast – AI-Assisted Flight Booking & Management Platform',
    description: 'Engineered an end-to-end flight booking platform covering search, booking, cancellation, and automated refund workflows with conversational AI assistant.',
    tech: ['Node.js', 'React.js', 'PostgreSQL', 'Docker', 'GitHub Actions', 'OpenAI API'],
    image: '/flyfast.png',
    link: 'https://flight-bookings.vercel.app/'
  },
  {
    title: 'Cryptographic Chain of Custody & Digital Evidence Tracking System',
    description: 'Secure digital evidence tracking system implementing SHA-256 cryptographic hashing to ensure absolute data integrity and tamper-proof records.',
    tech: ['Node.js', 'MySQL', 'SHA-256 Cryptography', 'Role-Based Access Control (RBAC)', 'Git'],
    image: '/Chain-of-custody.jpg',
    link: 'https://github.com/lokeshparasuraman/CHAIN-OF-CUSTODY'
  },
  {
    title: 'Todo Summarizer',
    description: 'Developer utility that processes daily logs, runs summaries through OpenAI GPT models, and sends scheduled highlights to Slack channels.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Slack API'],
    image: '/Todo-Summarizer.png',
    link: 'https://github.com/lokeshparasuraman/todo-summarize'
  },
  {
    title: 'Weather App',
    description: 'Real-time weather tracking application showing location-based forecasts and atmospheric charts.',
    tech: ['React', 'Weather API', 'CSS3', 'JavaScript'],
    image: '/weather.png',
    link: 'https://main--weather-app-react-kannan.netlify.app/'
  },
  {
    title: 'DSA Solutions (Java)',
    description: 'My solutions to various data structures and algorithms problems implemented in Java.',
    tech: ['Java', 'Algorithms', 'Data Structures'],
    image: '/dsa.png',
    link: 'https://github.com/lokeshparasuraman/Dsa-problems'
  }
];

export const skills = {
  languages: [
    { name: 'Java (Core & Advanced)' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
  ],
  core: [
    { name: 'Data Structures & Algorithms' },
    { name: 'Object-Oriented Programming (OOP)' },
    { name: 'Problem Solving' },
  ],
  backend: [
    { name: 'Node.js' },
    { name: 'RESTful APIs' },
    { name: 'Role-Based Access Control (RBAC)' },
    { name: 'System Architecture' },
  ],
  frontend: [
    { name: 'React.js' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'Tailwind CSS' },
  ],
  databases: [
    { name: 'PostgreSQL' },
    { name: 'MySQL' },
    { name: 'Database Management Systems (DBMS)' },
    { name: 'Query Optimization' },
  ],
  aiCloud: [
    { name: 'OpenAI API Integration' },
    { name: 'Docker' },
    { name: 'Cloud Deployment' },
    { name: 'GitHub Actions' },
  ]
};

