import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowRight, ExternalLink } from 'lucide-react';

const FILTERS = ['All', 'LLM / RAG', 'NLP', 'Computer Vision', 'MLOps', 'Data Engineering'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => project.filterTags.includes(activeFilter));
  }, [activeFilter]);

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
    <section id="projects" className="py-[120px] max-w-[1200px] mx-auto px-6 w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="font-body text-xs font-semibold tracking-[0.15em] text-accent1 uppercase">
            [ PROJECTS ]
          </span>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="font-display text-[48px] font-semibold leading-tight text-textPrimary mb-4">
          What I've Built
        </motion.h2>
        
        <motion.p variants={itemVariants} className="font-body text-textMuted text-lg mb-12">
          Production-grade AI systems, not side projects.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`glass-pill px-5 py-2 font-body text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-gradient-1 text-white border-transparent' 
                  : 'text-textSecondary hover:text-textPrimary border-white/10 hover:border-accent1/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(108,99,255,0.2)' }}
                className="glass-card flex flex-col overflow-hidden relative h-full"
              >
                {/* Accent Bar */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${project.accentBar}`}></div>
                
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl">{project.icon}</span>
                    <span className={`font-body text-[10px] font-bold tracking-wider px-3 py-1 rounded-full border uppercase ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-textPrimary mb-3">
                    {project.title}
                  </h3>

                  <p className="font-body text-sm text-textMuted leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="glass-pill px-3 py-1 font-body text-[11px] text-textSecondary border-white/5 bg-white/[0.02]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-pill px-4 py-2 flex items-center gap-2 text-sm font-semibold text-textPrimary hover:text-accent1 hover:border-accent1/50 transition-colors"
                      >
                        GitHub <ArrowRight size={14} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-pill px-4 py-2 flex items-center gap-2 text-sm font-semibold text-accent2 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
