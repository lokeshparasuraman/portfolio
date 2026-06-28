"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LogEntry = {
  type: "command" | "output" | "error" | "success";
  content: string | React.ReactNode;
};

const COMMANDS = {
  help: "Display all available commands",
  about: "A brief summary of who I am",
  skills: "List my technical expertise",
  projects: "Showcase my featured work",
  experience: "My professional journey",
  contact: "How to reach out to me",
  clear: "Clear the terminal screen",
};

export function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    { type: "output", content: "Welcome to Lokesh's CLI v1.0.0" },
    { type: "output", content: "Type 'help' to see available commands." },
  ]);
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // check if terminal is visible to focus it
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.intersectionRatio > 0.6);
      },
      { threshold: [0, 0.6, 1.0] }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // auto-focus input when user starts typing while terminal is in view
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (
        isIntersecting && 
        document.activeElement?.tagName !== "INPUT" && 
        document.activeElement?.tagName !== "TEXTAREA" &&
        !e.ctrlKey && !e.metaKey && !e.altKey &&
        e.key.length === 1
      ) {
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isIntersecting]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // scroll to bottom on new log entries
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim();
    const newHistory: LogEntry[] = [...history, { type: "command", content: `> ${cmd}` }];

    switch (cleanCmd) {
      case "help":
        newHistory.push({
          type: "output",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 mt-2">
              {Object.entries(COMMANDS).map(([name, desc]) => (
                <div key={name} className="flex gap-2">
                  <span className="text-primary font-bold w-24 shrink-0">{name}</span>
                  <span className="text-neutral-500">- {desc}</span>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          content: "I'm Lokesh Parasuraman, a Software Developer passionate about backend optimization, database design, clean user interfaces, and solving complex algorithmic challenges. Eager to contribute to software engineering teams.",
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          content: "Languages: Java (Core & Advanced), JavaScript, TypeScript. Core: DSA, OOP, Problem Solving. Backend: Node.js, RESTful APIs, RBAC, System Architecture. Frontend: React.js, HTML5, CSS3, Tailwind CSS. Databases: PostgreSQL, MySQL, DBMS, Query Optimization. AI & Cloud: OpenAI API, Docker, Cloud Deployment, GitHub Actions.",
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          content: "Featured: Fly-Fast – AI-Assisted Flight Booking & Management Platform (Live: flight-bookings.vercel.app), Cryptographic Chain of Custody & Digital Evidence Tracking System, Todo Summarizer.",
        });
        break;

      case "experience":
        newHistory.push({
          type: "output",
          content: "Software Developer working on projects spanning AI-assisted flight search platforms and secure cryptographic ledgers. Specialized in concurrent database locks, SHA-256 validation, and API development.",
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          content: "Email: lokeshofficial0114@gmail.com | LinkedIn: lokeshparasuraman | GitHub: lokeshparasuraman",
        });
        break;

      case "clear":
        setHistory([]);
        return;

      case "hire":
        newHistory.push({
          type: "error",
          content: "Permission denied: You are not authorized to 'hire' without sudo.",
        });
        break;

      case "sudo hire lokesh":
        newHistory.push({
          type: "success",
          content: "EXECUTION GRANTED: Initializing recruitment sequence... Redirecting to email contact.",
        });
        setTimeout(() => {
          window.location.href = "mailto:lokeshofficial0114@gmail.com?subject=I'd like to hire you";
        }, 1500);
        break;

      case "":
        break;

      default:
        newHistory.push({
          type: "error",
          content: `Command not found: ${cleanCmd}. Type 'help' for assistance.`,
        });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <div 
      ref={terminalRef}
      className="w-full bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-sm md:text-base flex flex-col h-[400px] cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="bg-neutral-900 px-4 py-2 border-b border-white/10 flex items-center justify-between pointer-events-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
        </div>
        <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
          developer@lokesh: ~
        </div>
      </div>

      <div 
        ref={containerRef}
        className="p-4 overflow-y-auto flex-grow hide-scrollbar space-y-2 selection:bg-primary/30 selection:text-white"
      >
        <AnimatePresence initial={false}>
          {history.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={
                entry.type === "command" ? "text-white font-bold" :
                entry.type === "error" ? "text-red-400" :
                entry.type === "success" ? "text-primary" :
                "text-neutral-400"
              }
            >
              {entry.content}
            </motion.div>
          ))}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="relative flex items-center gap-2 mt-2">
          <span className="text-primary font-bold">➜</span>
          <span className="text-white font-bold">~</span>
          <div className="relative flex-grow flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-white caret-transparent z-10"
              spellCheck={false}
              autoComplete="off"
            />
            <div className="absolute left-0 top-0 pointer-events-none flex items-center h-full">
               <span className="invisible whitespace-pre">{input}</span>
               <span className="terminal-cursor" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
