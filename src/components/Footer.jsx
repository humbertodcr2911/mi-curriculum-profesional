import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const { personalInfo, contact } = cvData;

  return (
    <footer className="relative bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-black dark:text-white pt-32 md:pt-40 lg:pt-60 pb-12 md:pb-20 overflow-hidden border-t border-primary/10 transition-colors duration-700 no-print">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Big Closing Statement - Massive */}
        <div className="mb-24 md:mb-48">
          <motion.h3
            className="text-[12vw] sm:text-[10vw] font-display font-medium leading-[1] md:leading-[0.8] tracking-tight break-words"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ¿Diseñamos <br /> <span className="text-primary/30 dark:text-primary/50 text-outline italic">el mañana?</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 mb-24 md:mb-48 items-end">
          {/* Main Contacts - Horizontal & Bold */}
          <div className="lg:col-span-8 flex flex-wrap gap-8 md:gap-16 lg:gap-24">
            <motion.a
              href={`mailto:${contact.email}`}
              className="group flex flex-col space-y-4 md:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary/40 group-hover:text-primary transition-colors" />
                <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary/40 uppercase font-black">Email</span>
              </div>
              <span className="text-2xl md:text-4xl lg:text-5xl font-display font-medium border-b-2 border-primary/10 group-hover:border-primary group-hover:text-primary transition-all pb-1 md:pb-2 break-all">
                {contact.email}
              </span>
            </motion.a>

            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col space-y-4 md:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary/40 group-hover:text-primary transition-colors" />
                <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary/40 uppercase font-black">Conexión</span>
              </div>
              <span className="text-2xl md:text-4xl lg:text-5xl font-display font-medium border-b-2 border-primary/10 group-hover:border-primary group-hover:text-primary transition-all pb-1 md:pb-2">
                LinkedIn
              </span>
            </motion.a>
          </div>

          {/* Simple Description */}
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-px w-8 md:w-12 bg-primary/20" />
              <span className="text-[10px] md:text-xs font-mono tracking-widest text-primary uppercase font-black">Filosofía</span>
            </div>
            <p className="text-[10px] md:text-sm font-mono tracking-widest text-primary/40 dark:text-primary/20 uppercase leading-relaxed max-w-[280px] lg:ml-auto font-black italic">
              Sistemas complejos, arquitecturas robustas y elegancia técnica integral.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 md:pt-16 border-t-2 border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="flex items-center space-x-6 md:space-x-10 text-[8px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.4em] text-primary/30 uppercase font-black">
            <span>© {new Date().getFullYear()} {personalInfo.name}</span>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-primary/20" />
            <span>CARACAS, VENEZUELA</span>
          </div>

          <nav className="flex items-center space-x-8 md:space-x-12">
            {[
              { name: 'INDEX', id: 'hero' },
              { name: 'EXPERIENCIA', id: 'experience' },
              { name: 'PROYECTOS', id: 'projects' },
              { name: 'CONTACTO', id: 'contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] text-black/40 dark:text-white/40 hover:text-primary transition-all hover:translate-y-[-2px] uppercase"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
