"use client";

import { motion, Variants } from "framer-motion";
import { Github, ExternalLink, Rocket, Zap, Share2, Layers, CheckCircle2, Plane, Terminal, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Cryptographic Chain of Custody & Digital Evidence Tracking System",
    description: "Secure digital evidence tracking system implementing SHA-256 cryptographic hashing to ensure absolute data integrity and tamper-proof records.",
    tech: ["Node.js", "MySQL", "SHA-256 Cryptography", "Role-Based Access Control (RBAC)", "Git"],
    github: "https://github.com/lokeshparasuraman/CHAIN-OF-CUSTODY",
    icon: <Shield className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors" />,
    points: [
      "Conceptualized and engineered a secure digital evidence tracking system implementing SHA-256 cryptographic hashing to ensure absolute data integrity and tamper-proof records.",
      "Achieved the architectural properties of blockchain immutability and linear compliance tracking within a relational database design, mitigating processing overhead.",
      "Designed and executed a strict Role-Based Access Control (RBAC) mechanism encompassing Investigators, Administrators, and Auditors to guarantee adherence to the principle of least privilege.",
      "Built an independent cryptographic verification module enabling system stakeholders to programmatically validate any historical evidence record against its original hash to identify anomalies.",
      "Optimized underlying database queries and schema indexes in MySQL to handle extensive historical audit logs without degradation in retrieval times."
    ]
  },
  {
    title: "Todo Summarizer",
    description: "AI productivity agent that aggregates raw daily logs and dev notes, summarizing them into structured formats using OpenAI's GPT models, with direct Slack notifications.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI API", "Slack API"],
    github: "https://github.com/lokeshparasuraman/todo-summarize",
    icon: <Zap className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors" />,
    points: [
      "Integrated OpenAI GPT APIs to synthesize developer todo lists into structured summaries.",
      "Created automated Slack webhooks scheduling daily summaries directly to workspaces.",
      "Designed secure MongoDB collections caching summary history and metrics."
    ]
  },
  {
    title: "Weather App",
    description: "Clean, responsive real-time weather analytics application featuring location-aware searches and historical forecast trends.",
    tech: ["React", "Weather API", "CSS3", "JavaScript"],
    live: "https://main--weather-app-react-kannan.netlify.app/",
    icon: <Share2 className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors" />,
    points: [
      "Integrated OpenWeather API to retrieve real-time regional atmospheric details.",
      "Built animated visual weather widgets showcasing wind speeds, pressure, and humidity graphs."
    ]
  },
  {
    title: "DSA Solutions (Java)",
    description: "Repository containing robust and optimized implementations of advanced data structures and algorithms in Java, focusing on optimal space and time complexities.",
    tech: ["Java", "Algorithms", "Data Structures"],
    github: "https://github.com/lokeshparasuraman/Dsa-problems",
    icon: <Terminal className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors" />,
    points: [
      "Developed 100+ optimized algorithmic solutions spanning Graphs, Dynamic Programming, and Trees.",
      "Analyzed algorithmic complexities verifying sub-millisecond execution thresholds."
    ]
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
};

export function Projects() {
  return (
    <section id="projects" className="w-full max-w-6xl py-32 px-4 mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Selected Projects
        </motion.h2>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -10 }}
          className="mb-16 group"
        >
          <div className="bg-card border border-primary/20 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-primary/50 shadow-2xl relative">
            <div className="absolute top-6 left-6 z-20">
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary font-bold text-xs uppercase tracking-widest backdrop-blur-md">
                <Rocket className="w-3.5 h-3.5" />
                Featured Project
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/5 relative min-h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,207,142,0.05)_0%,transparent_70%)]" />
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-700 flex flex-col items-center gap-4">
                  <div className="p-6 rounded-3xl bg-primary/10 text-primary">
                    <Plane className="w-16 h-16" />
                  </div>
                  <div className="flex gap-3">
                    <div className="p-3 rounded-xl bg-white/5 text-white/40"><Zap className="w-6 h-6" /></div>
                    <div className="p-3 rounded-xl bg-white/5 text-white/40"><Layers className="w-6 h-6" /></div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
                  Fly-Fast – AI-Assisted Flight Booking & Management Platform
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Engineered an end-to-end flight booking platform covering search, booking, cancellation, and automated refund workflows. Integrated a conversational AI assistant and robust transaction locks.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Core Modules</h4>
                    <ul className="space-y-3">
                      {[
                        "Search, Booking, Cancellation",
                        "Automated Refund Workflows",
                        "Conversational AI Assistant",
                        "Database Seat Locks (Concurrency)",
                        "Resilient Payment Module"
                      ].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-primary/60" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Database & APIs</h4>
                    <div className="space-y-4">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="text-xl font-bold text-white">PostgreSQL</div>
                        <div className="text-[10px] text-muted-foreground uppercase">Seat Locks & Flight Records</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="text-xl font-bold text-white">Node / OpenAI API</div>
                        <div className="text-[10px] text-muted-foreground uppercase">AI Assistant & Payment API</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {["Node.js", "React.js", "PostgreSQL", "Docker", "GitHub Actions", "OpenAI API"].map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded text-white/80 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto pt-8 border-t border-white/5">
                  <Link href="https://flight-bookings.vercel.app/" target="_blank">
                    <Button className="rounded-xl bg-primary hover:bg-primary/90 text-black transition-all h-12 px-8 shadow-[0_0_15px_-3px_rgba(62,207,142,0.4)]">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live App
                    </Button>
                  </Link>
                  <Link href="https://github.com/lokeshparasuraman/flight-bookings" target="_blank">
                    <Button variant="outline" className="rounded-xl border-white/10 hover:bg-white/10 hover:text-white transition-all h-12 px-6">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group h-full flex flex-col"
            >
              <div className="bg-card border border-primary/20 h-full flex flex-col overflow-hidden rounded-[2rem] transition-all duration-500 hover:border-primary/50 shadow-xl">
                
                <div className="h-48 bg-white/[0.02] w-full flex items-center justify-center border-b border-white/5 relative overflow-hidden group-hover:bg-primary/[0.03] transition-colors duration-500">
                  <div className="relative z-20 transform group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {project.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-xs text-neutral-400 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="px-3 py-1 text-[10px] font-mono rounded-full bg-white/5 text-white/70 border border-white/10 uppercase tracking-tighter"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-white/5">
                    {project.github && (
                      <Link href={project.github} target="_blank" className="flex-1">
                        <Button variant="outline" className="w-full rounded-xl border-white/10 hover:bg-white/10 hover:text-white transition-all h-12">
                          <Github className="w-4 h-4 mr-2" />
                          Source
                        </Button>
                      </Link>
                    )}
                    {project.live && (
                      <Link href={project.live} target="_blank" className="flex-1">
                        <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 text-black transition-all h-12 shadow-[0_0_15px_-3px_rgba(62,207,142,0.4)]">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Site
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
