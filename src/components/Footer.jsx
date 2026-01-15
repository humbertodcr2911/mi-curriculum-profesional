import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const Footer = () => {
  const { personalInfo, contact } = cvData;

  return (
    <footer className="relative bg-white dark:bg-black text-black dark:text-white pt-48 pb-16 overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-700">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 relative z-10">

        {/* Big Closing Statement */}
        <div className="mb-32">
          <motion.h3
            className="text-[10vw] font-display font-medium leading-[0.8] tracking-tighter"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ¿Diseñamos <br /> <span className="text-black/5 dark:text-white/5 text-outline">el mañana?</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 mb-32 items-end">
          {/* Main Contacts */}
          <div className="lg:col-span-8 flex flex-wrap gap-12">
            <motion.a
              href={`mailto:${contact.email}`}
              className="group flex flex-col space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-mono tracking-[0.4em] text-black/20 dark:text-white/20 uppercase">Email</span>
              <span className="text-3xl font-display font-medium border-b border-black/10 dark:border-white/10 group-hover:border-black dark:group-hover:border-white transition-colors">
                {contact.email}
              </span>
            </motion.a>

            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-[10px] font-mono tracking-[0.4em] text-black/20 dark:text-white/20 uppercase">Red</span>
              <span className="text-3xl font-display font-medium border-b border-black/10 dark:border-white/10 group-hover:border-black dark:group-hover:border-white transition-colors">
                LinkedIn
              </span>
            </motion.a>
          </div>

          {/* Simple Description */}
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-[10px] font-mono tracking-widest text-black/40 dark:text-white/40 uppercase leading-relaxed max-w-[280px] lg:ml-auto">
              Sistemas complejos, arquitecturas robustas y elegancia técnica.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-6 text-[10px] font-mono tracking-widest text-black/20 dark:text-white/20 uppercase">
            <span>© {new Date().getFullYear()} {personalInfo.name}</span>
            <div className="h-1 w-1 bg-black/10 dark:bg-white/10" />
            <span>CARACAS, VENEZUELA</span>
          </div>

          <nav className="flex items-center space-x-10">
            {[
              { name: 'PROYECTOS', id: 'projects' },
              { name: 'CONTACTO', id: 'contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[10px] font-bold tracking-[0.3em] text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
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
