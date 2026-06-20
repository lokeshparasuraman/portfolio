"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export function About() {
  return (
    <section id="about" className="w-full max-w-4xl py-32 px-4 mx-auto relative">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        <motion.div variants={item}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h2>
        </motion.div>

        <div className="prose prose-invert max-w-none text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
          <motion.p variants={item}>
            I am a full-stack developer who enjoys building performant web applications, secure backends, and modular tools. My engineering focus centers on 
            <strong className="text-white font-semibold"> clean frontend layouts</strong>, reliable database designs, and high-performance server microservices.
          </motion.p>
          <motion.p variants={item}>
            Based in India, I focus on building interfaces using React and Next.js, and connecting them to backend services written in Node.js, Express, and Java. I spend a lot of time on database indexing, API query optimization, and structured SQL/NoSQL schemas.
          </motion.p>
          <motion.p variants={item}>
            My project portfolio includes building a blockchain-inspired <strong className="text-primary font-semibold">Chain of Custody ledger</strong> using SHA-256 validation to prevent database tampering, crafting a flight search and booking web application, and launching OpenAI-driven developer utilities.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
