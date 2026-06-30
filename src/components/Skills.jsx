import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
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
    <section id="skills" className="py-[120px] max-w-[1200px] mx-auto px-6 w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="font-body text-xs font-semibold tracking-[0.15em] text-accent1 uppercase">
            [ SKILLS & STACK ]
          </span>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="font-display text-[48px] font-semibold leading-tight text-textPrimary mb-16">
          Technologies I Work With
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(108,99,255,0.2)' }}
              className="glass-card p-8 flex flex-col gap-6"
            >
              <h3 className="font-display text-xl font-semibold text-textPrimary">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="glass-pill px-3 py-1.5 flex items-center gap-2 border-accent1/30 hover:shadow-[0_0_12px_rgba(108,99,255,0.4)] transition-all cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent1"></span>
                    <span className="font-body text-[12px] text-[#F0F0FF]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
