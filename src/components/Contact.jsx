"use client";
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Download } from 'lucide-react';

const contactLinks = [
  {
    id: 'email',
    icon: <Mail size={24} className="text-accent1" />,
    label: 'Email',
    value: 'ananthan0377@gmail.com',
    href: 'mailto:ananthan0377@gmail.com'
  },
  {
    id: 'linkedin',
    icon: <Linkedin size={24} className="text-[#0A66C2]" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/anantha-krishnan-k',
    href: 'https://linkedin.com/in/anantha-krishnan-k'
  },
  {
    id: 'github',
    icon: <Github size={24} className="text-white" />,
    label: 'GitHub',
    value: 'github.com/anantha037',
    href: 'https://github.com/anantha037'
  },
  {
    id: 'phone',
    icon: <Phone size={24} className="text-accent2" />,
    label: 'Phone',
    value: '+91 90373 22474',
    href: 'tel:+919037322474'
  }
];

export default function Contact() {
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
    <section id="contact" className="py-[120px] max-w-[600px] mx-auto px-6 w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="font-body text-xs font-semibold tracking-[0.15em] text-accent1 uppercase">
            [ CONTACT ]
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="font-display text-[48px] font-semibold leading-tight text-textPrimary mb-4">
          Let's Build Something Together
        </motion.h2>

        <motion.p variants={itemVariants} className="font-body text-textMuted text-lg mb-16 max-w-md">
          Open to AI/ML Engineer roles. I bring production-ready systems, not just notebooks.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
          {contactLinks.map((link) => (
            <motion.a
              key={link.id}
              variants={itemVariants}
              href={link.href}
              aria-label={link.label}
              target={link.id === 'email' || link.id === 'phone' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(108,99,255,0.2)' }}
              className="glass-card flex flex-col items-center justify-center p-6 gap-3 group border-white/5 hover:border-accent1/30 transition-colors"
            >
              <div className="p-3 glass-pill bg-white/5 group-hover:bg-white/10 transition-colors">
                {link.icon}
              </div>
              <span className="font-display font-semibold text-textPrimary">
                {link.label}
              </span>
              <span className="font-body text-xs text-textMuted group-hover:text-textSecondary transition-colors">
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div variants={itemVariants} className="w-full">
          <div className="glass-card w-full p-8 flex flex-col items-center justify-center gap-6 border-accent1/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-1 opacity-5"></div>
            <p className="font-body text-sm font-semibold text-textPrimary relative z-10">
              Available for full-time AI/ML Engineer roles · Kerala / Remote · India
            </p>
            <motion.a
              href="/resume.pdf" download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-1 rounded-xl text-white font-body font-semibold hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-shadow relative z-10 w-full sm:w-auto"
            >
              Download Resume <Download size={18} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
