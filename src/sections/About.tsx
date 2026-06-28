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
            I am a <strong className="text-white font-semibold">Computer Science and Engineering graduate</strong> with strong foundations in Java, Data Structures & Algorithms (DSA), and web application development.
          </motion.p>
          <motion.p variants={item}>
            I am passionate about designing optimized backend systems, writing clean code, and solving complex algorithmic challenges. I focus on database performance, role-based access controls, and secure RESTful architectures.
          </motion.p>
          <motion.p variants={item}>
            My technical projects include engineering <strong className="text-primary font-semibold">Fly-Fast</strong>, an AI-assisted flight booking platform with transactional database locks, and a secure <strong className="text-primary font-semibold">Cryptographic Chain of Custody ledger</strong> implementing SHA-256 validation to ensure tamper-proof records.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
