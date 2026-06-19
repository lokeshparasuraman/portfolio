export const siteConfig = {
  name: "Lokesh Parasuraman",
  role: "Full Stack Developer",
  email: "lokesh@example.com", // Replace with actual
  github: "https://github.com/lokeshparasuraman",
  linkedin: "https://linkedin.com/in/lokeshparasuraman",
  resume: "/resume.pdf", // Path to resume
  description: "I am a passionate Full Stack Developer focused on building scalable and user-centric web applications.",
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
    description: 'An AI-powered platform for searching and booking flights with a seamless modern UI.',
    tech: ['React', 'Tailwind CSS', 'TypeScript', 'Express', 'PostgreSQL'],
    image: '/flyfast.png',
    link: 'https://flight-bookings.vercel.app/'
  },
  {
    title: 'Chain Of Custody',
    description: 'Blockchain-based evidence management system to prevent tampering in legal proceedings.',
    tech: ['React', 'Node.js', 'MongoDB', 'Blockchain'],
    image: '/Chain-of-custody.jpg',
    link: 'https://github.com/lokeshparasuraman/CHAIN-OF-CUSTODY'
  },
  {
    title: 'Weather App',
    description: 'Real-time weather tracking application with location-based forecasts.',
    tech: ['React', 'Weather API', 'CSS'],
    image: '/weather.png',
    link: 'https://main--weather-app-react-kannan.netlify.app/'
  },
  {
    title: 'Todo Summarizer',
    description: 'Task management tool that summarizes and categorizes entries using AI.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
    image: '/Todo-Summarizer.png',
    link: 'https://github.com/lokeshparasuraman/todo-summarize'
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
