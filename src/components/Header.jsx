import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Github, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../data/cvData';

const Header = () => {
  const { personalInfo, contact } = cvData;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-card px-6 py-3 flex justify-between items-center transition-all duration-500 ${scrolled ? 'shadow-2xl' : 'shadow-none bg-transparent border-transparent'
          }`}>
          <motion.a
            href="#home"
            className="text-2xl font-display font-black tracking-tighter"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary-light transition-colors rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}

            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-4" />

            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <motion.a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <button
                onClick={() => window.print()}
                className="btn-primary ml-4 !py-2 !px-5 text-sm"
              >
                <FileText className="w-4 h-4 mr-2" />
                <span>PDF</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 glass-card p-4 flex flex-col space-y-2 overflow-hidden"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-lg font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;