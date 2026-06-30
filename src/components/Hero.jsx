import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const headline = "Building Intelligent Systems That Think.".split(" ");

  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass-pill px-4 py-2 mb-8 border-accent1/40 shadow-[0_0_15px_rgba(108,99,255,0.2)]"
        >
          <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-textPrimary">
            AI / ML Engineer
          </span>
        </motion.div>

        <h1 className="font-display text-[40px] md:text-[72px] leading-[1.1] font-bold tracking-tight mb-6 max-w-4xl text-textPrimary">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
              className={`inline-block mr-3 md:mr-4 ${i >= 3 ? 'text-transparent bg-clip-text bg-gradient-1' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-base md:text-lg text-textSecondary max-w-2xl mb-12 leading-relaxed"
        >
          From legal AI to multi-agent orchestration — I engineer production-ready machine learning systems that solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-1 rounded-xl text-white font-body font-semibold hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-shadow"
          >
            View My Work <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="/resume.pdf" download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 px-8 py-4 glass-card border-accent1/30 text-textPrimary font-body font-semibold hover:bg-white/5 transition-colors"
          >
            Download Resume <Download size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: 'Projects', val: '8+' },
            { label: 'ML Models', val: '10+' },
            { label: 'Languages (NLP)', val: '10' },
            { label: 'Deployments', val: '4+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(108,99,255,0.2)' }}
              className="glass-card flex flex-col items-center py-4 px-2"
            >
              <span className="font-display text-2xl font-bold bg-gradient-1 bg-clip-text text-transparent mb-1">{stat.val}</span>
              <span className="font-body text-xs text-textMuted uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-textMuted" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
