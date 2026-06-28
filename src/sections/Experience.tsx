"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Project Developer",
    company: "Fly-Fast",
    product: "AI-Assisted Flight Booking & Management Platform",
    period: "2024 – Present",
    location: "India",
    description: "AI-assisted flight booking and management system.",
    achievements: [
      "Engineered an end-to-end flight booking platform covering search, booking, cancellation, and automated refund workflows.",
      "Optimized application workflows using algorithmic data structuring to reduce multi-step user search friction by approximately 60%, incorporating a conversational AI assistant via the OpenAI API.",
      "Designed and implemented database-layer concurrent seat-availability locks to eliminate double booking race conditions under simultaneous heavy transactional loads.",
      "Developed a resilient payment processing module supporting UPI and card transactions equipped with real-time state tracking, automatic failed-payment retries, and cancellation policy enforcement.",
      "Architected the complete booking lifecycle management system incorporating automated PNR generation, transactional seat reservation states, and an audit-friendly historical ledger.",
      "Containerized the layout using Docker and established a fully automated CI/CD pipeline via GitHub Actions for production cloud deployment."
    ],
    tech: ["Node.js", "React.js", "PostgreSQL", "Docker", "GitHub Actions", "OpenAI API"],
  },
  {
    role: "Project Developer",
    company: "Cryptographic Chain of Custody",
    product: "Digital Evidence Tracking System",
    period: "2023 – 2024",
    location: "India",
    description: "Secure digital evidence tracking and verification system.",
    achievements: [
      "Conceptualized and engineered a secure digital evidence tracking system implementing SHA-256 cryptographic hashing to ensure absolute data integrity and tamper-proof records.",
      "Achieved the architectural properties of blockchain immutability and linear compliance tracking within a relational database design, mitigating processing overhead.",
      "Designed and executed a strict Role-Based Access Control (RBAC) mechanism encompassing Investigators, Administrators, and Auditors to guarantee adherence to the principle of least privilege.",
      "Built an independent cryptographic verification module enabling system stakeholders to programmatically validate any historical evidence record against its original hash to identify anomalies.",
      "Optimized underlying database queries and schema indexes in MySQL to handle extensive historical audit logs without degradation in retrieval times."
    ],
    tech: ["Node.js", "MySQL", "SHA-256 Cryptography", "Role-Based Access Control (RBAC)", "Git"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full max-w-5xl py-32 px-4 mx-auto space-y-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16"
        >
          Technical Projects
        </motion.h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-2xl bg-card border border-white/5 transition-all hover:border-primary/50">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-4 gap-2">
                  <div>
                    <h3 className="font-bold text-2xl text-foreground mb-1">{exp.role}</h3>
                    <div className="text-primary font-medium flex items-center gap-2 mb-1">
                      <span>{exp.company} {exp.product && `(${exp.product})`}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      <span className="text-sm text-muted-foreground">{exp.location}</span>
                    </div>
                    {exp.description && (
                      <p className="text-sm text-muted-foreground/80 font-medium italic mb-2">
                        {exp.description}
                      </p>
                    )}
                  </div>
                  <span className="text-sm font-medium text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <ul className="list-disc list-outside ml-4 space-y-3 text-muted-foreground mb-6 leading-relaxed marker:text-primary/50">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-white/70 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education & Achievements Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold tracking-tight">Education</h2>
          <div className="p-8 rounded-[2rem] bg-card border border-white/5 space-y-6">
            <div>
              <span className="text-sm font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                2021 – 2025
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">Bachelor of Engineering (B.E.)</h3>
              <p className="text-lg text-muted-foreground font-semibold">Computer Science & Engineering</p>
              <p className="text-sm text-muted-foreground">Coimbatore Institute of Engineering and Technology</p>
              <p className="text-sm font-medium text-white/80 mt-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg inline-block">
                CGPA: 7.58 / 10
              </p>
            </div>
            <div className="border-t border-white/5 pt-4">
              <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms (DSA)",
                  "Database Management Systems (DBMS)",
                  "Object-Oriented Software Engineering",
                  "Operating Systems"
                ].map((course) => (
                  <span key={course} className="text-xs bg-white/5 text-white/70 px-2.5 py-1 rounded-md border border-white/5">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold tracking-tight">Achievements</h2>
          <div className="p-8 rounded-[2rem] bg-card border border-white/5 space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                  1st
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">First Prize Winner</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    Secured top honors for the final year technical project presentation evaluation among competing engineering cohorts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-t border-white/5 pt-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                  ★
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Good Quality Code Award</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    Officially recognized for outstanding architectural formatting, clean code practices, and optimal implementation efficiency during the Inter-Collegiate Hackathon hosted at SNS College of Engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

