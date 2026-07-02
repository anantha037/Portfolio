"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Download, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

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
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim()) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address.";
    if (!formData.subject.trim()) return "Subject is required.";
    if (!formData.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-[120px] max-w-[1200px] mx-auto px-6 w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center text-center w-full"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="font-body text-xs font-semibold tracking-[0.15em] text-accent1 uppercase">
            [ CONTACT ]
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="font-display text-[40px] md:text-[48px] font-semibold leading-tight text-textPrimary mb-4">
          Let's Build Something Together
        </motion.h2>

        <motion.p variants={itemVariants} className="font-body text-textMuted text-lg mb-16 max-w-xl">
          Open to AI/ML Engineer roles. I bring production-ready systems, not just notebooks.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full text-left">
          
          {/* Left Column: Contact Links */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="font-display text-2xl font-semibold text-textPrimary mb-2">Get In Touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  aria-label={link.label}
                  target={link.id === 'email' || link.id === 'phone' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="glass-card flex flex-col items-start p-6 gap-3 group border-white/5 hover:border-accent1/30 hover:shadow-[0_8px_30px_rgba(108,99,255,0.15)] transition-all duration-300"
                >
                  <div className="p-3 glass-pill bg-white/5 group-hover:bg-white/10 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <span className="font-display font-semibold text-textPrimary block mb-1">
                      {link.label}
                    </span>
                    <span className="font-body text-sm text-textMuted group-hover:text-textSecondary transition-colors break-all">
                      {link.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass-card w-full p-8 mt-2 flex flex-col items-center sm:items-start justify-center gap-4 border-accent1/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-1 opacity-5"></div>
              <p className="font-body text-sm font-semibold text-textPrimary relative z-10">
                Available for full-time AI/ML Engineer roles <br/> Kerala / Remote · India
              </p>
              <a
                href="/resume.pdf" download
                aria-label="Download Resume"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-1 rounded-xl text-white font-body text-sm font-semibold hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-shadow relative z-10 w-full sm:w-auto mt-2"
              >
                Download Resume <Download size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={itemVariants} className="glass-card p-8 border-white/10 relative overflow-hidden">
            <h3 className="font-display text-2xl font-semibold text-textPrimary mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-body text-sm text-textSecondary">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={status === 'loading'}
                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 font-body text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-accent1/50 focus:bg-white/5 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-body text-sm text-textSecondary">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={status === 'loading'}
                    className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 font-body text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-accent1/50 focus:bg-white/5 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-body text-sm text-textSecondary">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Collaboration Opportunity"
                  disabled={status === 'loading'}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 font-body text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-accent1/50 focus:bg-white/5 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-body text-sm text-textSecondary">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  disabled={status === 'loading'}
                  className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 font-body text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-accent1/50 focus:bg-white/5 transition-all resize-none"
                />
              </div>

              <AnimatePresence mode="wait">
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-400 font-body text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                  >
                    <AlertCircle size={16} />
                    {errorMessage}
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-emerald-400 font-body text-sm bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20"
                  >
                    <CheckCircle2 size={16} />
                    Message sent successfully! I will get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto self-start mt-2 flex items-center justify-center gap-2 px-8 py-4 glass-pill border-accent1/40 hover:border-accent1 hover:bg-accent1/10 text-textPrimary font-body font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>Sending <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
