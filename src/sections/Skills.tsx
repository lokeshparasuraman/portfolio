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
  "Java (Core & Advanced)": <FaJava className="w-3.5 h-3.5 text-[#E76F00]" />,
  "JavaScript": <SiTypescript className="w-3.5 h-3.5 text-[#F7DF1E]" />,
  "TypeScript": <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" />,
  "Data Structures & Algorithms": <Database className="w-3.5 h-3.5 text-emerald-400" />,
  "Object-Oriented Programming (OOP)": <Code2 className="w-3.5 h-3.5 text-indigo-400" />,
  "Problem Solving": <Cpu className="w-3.5 h-3.5 text-blue-400" />,
  "Node.js": <SiNodedotjs className="w-3.5 h-3.5 text-[#339933]" />,
  "RESTful APIs": <Server className="w-3.5 h-3.5 text-[#3EBF8E]" />,
  "Role-Based Access Control (RBAC)": <Shield className="w-3.5 h-3.5 text-pink-400" />,
  "System Architecture": <Server className="w-3.5 h-3.5 text-purple-400" />,
  "React.js": <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />,
  "HTML5": <SiHtml5 className="w-3.5 h-3.5 text-[#E34F26]" />,
  "CSS3": <SiCss className="w-3.5 h-3.5 text-[#1572B6]" />,
  "Tailwind CSS": <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />,
  "PostgreSQL": <SiPostgresql className="w-3.5 h-3.5 text-[#4169E1]" />,
  "MySQL": <Database className="w-3.5 h-3.5 text-purple-400" />,
  "Database Management Systems (DBMS)": <Database className="w-3.5 h-3.5 text-amber-400" />,
  "Query Optimization": <Cpu className="w-3.5 h-3.5 text-[#3ecf8e]" />,
  "OpenAI API Integration": <SiOpenai className="w-3.5 h-3.5 text-[#412991]" />,
  "Docker": <SiDocker className="w-3.5 h-3.5 text-[#2496ED]" />,
  "Cloud Deployment": <Server className="w-3.5 h-3.5 text-blue-400" />,
  "GitHub Actions": <SiGithub className="w-3.5 h-3.5 text-white" />
};

const arsenal = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    description: "Java (Core & Advanced), JavaScript, TypeScript"
  },
  {
    id: "core",
    title: "Core Competencies",
    icon: <Cpu className="w-5 h-5 text-emerald-500" />,
    description: "Data Structures & Algorithms, Object-Oriented Programming (OOP), Problem Solving"
  },
  {
    id: "backend",
    title: "Backend & System Design",
    icon: <Server className="w-5 h-5 text-purple-500" />,
    description: "Node.js, RESTful APIs, Role-Based Access Control (RBAC), System Architecture"
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <LayoutTemplate className="w-5 h-5 text-pink-500" />,
    description: "React.js, HTML5, CSS3, Tailwind CSS"
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: <Database className="w-5 h-5 text-amber-500" />,
    description: "PostgreSQL, MySQL, Database Management Systems (DBMS), Query Optimization"
  },
  {
    id: "aiCloud",
    title: "Generative AI & Cloud",
    icon: <Shield className="w-5 h-5 text-indigo-500" />,
    description: "OpenAI API Integration, Docker, Cloud Deployment, GitHub Actions"
  }
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
