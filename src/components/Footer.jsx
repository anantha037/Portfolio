import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/5 bg-[#050510]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <div className="flex gap-6">
          <a href="https://github.com/anantha037" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent1 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/anantha-krishnan-k" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-accent1 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:ananthan0377@gmail.com" className="text-textMuted hover:text-accent1 transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <div className="text-center">
          <p className="font-body text-xs text-textMuted">
            © 2025 Anantha Krishnan K. · Built with React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
