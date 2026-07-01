"use client";
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2025 — Present",
    title: "ML Engineer Bootcamp",
    company: "Brototype, Kerala, India",
    icon: "🎯",
    description: "Intensive hands-on bootcamp focused on production ML systems. Built 10+ end-to-end projects covering LLMs, RAG, multi-agent AI, computer vision, and MLOps. Deployed systems on GCP Cloud Run, HuggingFace Spaces, and Vercel."
  },
  {
    year: "2025",
    title: "LexShield AI — Capstone Project",
    company: "Self-directed, 4-week intensive",
    icon: "⚖️",
    description: "Designed and built a full multi-agent legal AI assistant for Indian law from scratch. Delivered RAG pipeline, LangGraph orchestration, multilingual NLP, GCP deployment, and Next.js frontend — solo."
  },
  {
    year: "2021 — 2024",
    title: "B.Sc Honours — Computer Science",
    company: "Hansraj College, University of Delhi",
    icon: "🎓",
    description: "CGPA: 7.838/10. Studied algorithms, data structures, databases, machine learning fundamentals, and software engineering. Foundation for all subsequent AI/ML specialization."
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="py-[120px] max-w-[1200px] mx-auto px-6 w-full relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="font-body text-xs font-semibold tracking-[0.15em] text-accent1 uppercase">
            [ EXPERIENCE & EDUCATION ]
          </span>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="font-display text-[48px] font-semibold leading-tight text-textPrimary mb-20 text-center">
          The Journey
        </motion.h2>

        <div className="relative w-full max-w-4xl">
          {/* Central Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[24px] md:left-1/2 w-3 h-3 bg-gradient-1 rounded-full -translate-x-1/2 mt-6 z-10">
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-accent1 rounded-full"
                ></motion.div>
              </div>

              {/* Spacer for alternating layout on desktop */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* Card */}
              <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card p-6 md:p-8 hover:shadow-[0_12px_40px_rgba(108,99,255,0.2)] transition-shadow">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="glass-pill px-3 py-1 font-body text-xs font-bold text-accent2 border-accent2/30">
                      {exp.year}
                    </span>
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-textPrimary mb-2">
                    {exp.title}
                  </h3>
                  
                  <p className="font-body text-sm font-semibold italic text-textMuted mb-4">
                    {exp.company}
                  </p>
                  
                  <p className="font-body text-sm text-textSecondary leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
