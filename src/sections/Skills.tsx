"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Database, 
  LayoutTemplate, 
  Server, 
  Wrench,
  ChevronRight,
  ChevronDown,
  Terminal,
  Shield,
  Cpu
} from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss,
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiPostgresql, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiVercel, 
  SiDocker, 
  SiSolidity, 
  SiOpenai, 
  SiPostman, 
  SiFramer,
  SiFirebase, 
  SiNpm,
  SiSlack
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techIcons: Record<string, React.ReactNode> = {
  "React": <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />,
  "React.js": <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="w-3.5 h-3.5 text-white" />,
  "TypeScript": <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" />,
  "TailwindCSS": <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />,
  "Tailwind CSS": <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />,
  "HTML5": <SiHtml5 className="w-3.5 h-3.5 text-[#E34F26]" />,
  "CSS3": <SiCss className="w-3.5 h-3.5 text-[#1572B6]" />,
  "Framer Motion": <SiFramer className="w-3.5 h-3.5 text-[#F024B6]" />,
  "Responsive Design": <LayoutTemplate className="w-3.5 h-3.5 text-[#3EBF8E]" />,
  "Node.js": <SiNodedotjs className="w-3.5 h-3.5 text-[#339933]" />,
  "Express.js": <SiExpress className="w-3.5 h-3.5 text-white" />,
  "Express": <SiExpress className="w-3.5 h-3.5 text-white" />,
  "Python": <SiPython className="w-3.5 h-3.5 text-[#3776AB]" />,
  "REST APIs": <Server className="w-3.5 h-3.5 text-[#3EBF8E]" />,
  "JSON-RPC": <Cpu className="w-3.5 h-3.5 text-pink-400" />,
  "System Architecture": <Server className="w-3.5 h-3.5 text-indigo-400" />,
  "PostgreSQL": <SiPostgresql className="w-3.5 h-3.5 text-[#4169E1]" />,
  "MongoDB": <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" />,
  "SQL": <Database className="w-3.5 h-3.5 text-purple-400" />,
  "Firebase": <SiFirebase className="w-3.5 h-3.5 text-[#FFCA28]" />,
  "LocalStorage Cache": <Database className="w-3.5 h-3.5 text-amber-400" />,
  "Smart Contracts": <SiSolidity className="w-3.5 h-3.5 text-[#363636]" />,
  "Chain of Custody tracking": <Shield className="w-3.5 h-3.5 text-pink-400" />,
  "Immutable Hashing": <Shield className="w-3.5 h-3.5 text-purple-400" />,
  "Cryptographic Basics": <Shield className="w-3.5 h-3.5 text-pink-400" />,
  "Docker": <SiDocker className="w-3.5 h-3.5 text-[#2496ED]" />,
  "Git": <SiGit className="w-3.5 h-3.5 text-[#F05032]" />,
  "GitHub": <SiGithub className="w-3.5 h-3.5 text-white" />,
  "Vercel": <SiVercel className="w-3.5 h-3.5 text-white" />,
  "Postman": <SiPostman className="w-3.5 h-3.5 text-[#FF6C37]" />,
  "Linux CLI": <Terminal className="w-3.5 h-3.5 text-neutral-400" />,
  "NPM": <SiNpm className="w-3.5 h-3.5 text-[#CB3837]" />,
  "Java": <FaJava className="w-3.5 h-3.5 text-[#E76F00]" />,
  "Algorithms": <Cpu className="w-3.5 h-3.5 text-blue-400" />,
  "Data Structures": <Database className="w-3.5 h-3.5 text-emerald-400" />,
  "OpenAI API": <SiOpenai className="w-3.5 h-3.5 text-[#412991]" />,
  "Slack API": <SiSlack className="w-3.5 h-3.5 text-[#4A154B]" />
};

const arsenal = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <LayoutTemplate className="w-5 h-5 text-blue-500" />,
    description: "React.js, Next.js, TypeScript, TailwindCSS, HTML5, CSS3, Framer Motion, Responsive Design"
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Server className="w-5 h-5 text-emerald-500" />,
    description: "Node.js, Express.js, Python, REST APIs, JSON-RPC, System Architecture"
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: <Database className="w-5 h-5 text-purple-500" />,
    description: "PostgreSQL, MongoDB, SQL, Firebase, LocalStorage Cache"
  },
  {
    id: "blockchain",
    title: "Blockchain & Security",
    icon: <Code2 className="w-5 h-5 text-pink-500" />,
    description: "Smart Contracts, Chain of Custody tracking, Immutable Hashing, Cryptography Basics"
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: <Wrench className="w-5 h-5 text-amber-500" />,
    description: "Docker, Git, GitHub, Vercel, Postman, Linux CLI, NPM"
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export function Skills() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="skills" className="w-full max-w-5xl py-32 px-4 mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-16">
          <motion.div variants={itemVariants} className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">
            The Arsenal
          </motion.div>
          <div className="max-w-3xl">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Building at the intersection of <span className="text-primary">performance</span> and <span className="text-primary">security.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              Specializing in building responsive, type-safe frontend interfaces and robust backend services. 
              My approach focuses on clean code, optimization, and secure persistent architectures.
            </motion.p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {arsenal.map((item) => {
            const isExpanded = expandedId === item.id;
            
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                className="group"
              >
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className={`relative bg-card border border-white/5 p-6 rounded-[2rem] flex flex-col transition-all duration-300 cursor-pointer group-hover:border-primary/20 ${isExpanded ? 'border-primary/30 ring-1 ring-primary/10 shadow-[0_0_30px_-10px_rgba(62,207,142,0.1)]' : ''}`}
                >
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center shadow-inner group-hover:bg-primary/5 group-hover:border-primary/10 transition-all duration-300">
                      {item.icon}
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        {!isExpanded && (
                          <p className="text-sm text-muted-foreground truncate max-w-[250px] mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                      {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-white/5">
                          <div className="flex flex-wrap gap-2">
                            {item.description.split(", ").map((tech) => (
                              <span key={tech} className="inline-flex items-center gap-1.5 text-[10px] font-mono bg-white/[0.03] border border-white/10 px-2.5 py-1.5 rounded-lg text-white/90 transition-all hover:bg-white/[0.08] hover:border-primary/30">
                                {techIcons[tech] || <Code2 className="w-3.5 h-3.5 text-primary/60" />}
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
