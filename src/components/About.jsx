import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-[120px] max-w-[1200px] mx-auto px-6">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row gap-16"
      >
        {/* Left Column */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="font-body text-xs font-semibold tracking-[0.15em] text-accent1 uppercase">
              [ ABOUT ME ]
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="font-display text-[48px] font-semibold leading-tight text-textPrimary mb-8">
            The Engineer Behind the Models
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6 text-textSecondary font-body text-base leading-[1.75]">
            <p>
              I'm Anantha Krishnan K., an AI/ML Engineer from Kerala, India, currently completing the Machine Learning Engineer Bootcamp at Brototype. I hold a B.Sc Honours in Computer Science from Hansraj College, University of Delhi.
            </p>
            <p>
              My work lives at the intersection of legal AI, NLP, and production ML systems. My flagship project, LexShield AI, is an end-to-end multi-agent legal assistant for Indian law — built with LangGraph, RAG, LangChain, and deployed on GCP Cloud Run.
            </p>
            <p>
              I'm deeply passionate about making AI accessible, reliable, and explainable. Whether it's building evaluation frameworks, adding safety guardrails, or fine-tuning models on a CPU-only machine — I approach every problem with methodical discipline and a zero-excuse mindset.
            </p>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div variants={itemVariants} className="w-full lg:w-[40%] flex items-center justify-center">
          <div className="glass-card w-full p-6 border-accent1/30 shadow-[0_0_20px_rgba(108,99,255,0.1)] relative overflow-hidden">
            {/* Top Bar for terminal feel */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            
            <pre className="font-mono text-[13px] text-accent2 leading-relaxed whitespace-pre-wrap">
{`╭─ anantha@portfolio ~
│
│  name        Anantha Krishnan K.
│  role        AI / ML Engineer
│  location    Kerala, India 🇮🇳
│  education   B.Sc CS — Hansraj College, Delhi
│  bootcamp    Brototype ML Engineer Program
│  email       ananthan0377@gmail.com
│  github      github.com/anantha037
│  linkedin    linkedin.com/in/anantha-krishnan-k
│
╰─ status: open to opportunities ✦`}
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
