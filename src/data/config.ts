export const siteConfig = {
  name: "Lokesh Parasuraman",
  role: "Full Stack Developer",
  email: "lokeshofficial0114@gmail.com",
  github: "https://github.com/lokeshparasuraman",
  linkedin: "https://linkedin.com/in/lokeshparasuraman",
  resume: "/resume.pdf",
  description: "I'm a full-stack developer based in India, building clean web interfaces, secure backends, and modular tools.",
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
    title: 'Flight Booking Platform',
    description: 'A flight search and booking web application featuring interactive route filters, seat booking flow, and responsive dashboard design.',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    image: '/flyfast.png',
    link: 'https://flight-bookings.vercel.app/'
  },
  {
    title: 'Chain Of Custody',
    description: 'Secure evidence logging tool utilizing cryptographic SHA-256 validation to audit record additions and prevent unauthorized tampering.',
    tech: ['React', 'Node.js', 'MongoDB', 'Blockchain', 'SHA-256'],
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
  frontend: [
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'TypeScript' },
    { name: 'Tailwind CSS' },
    { name: 'HTML5' },
    { name: 'CSS3' },
  ],
  backend: [
    { name: 'Python' },
    { name: 'Node.js' },
    { name: 'Express.js' },
    { name: 'MongoDB' },
    { name: 'PostgreSQL' },
  ],
  tools: [
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'Vercel' },
    { name: 'Docker' },
  ]
};
