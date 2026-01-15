import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../data/cvData';

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { personalInfo } = cvData;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '01. SOBRE MÍ', href: '#about' },
    { name: '02. EXPERIENCIA', href: '#experience' },
    { name: '03. PROYECTOS', href: '#projects' },
    { name: '04. EDUCACIÓN', href: '#education' },
    { name: '05. CONTACTO', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 border-b border-black/5 dark:border-white/5' : 'bg-transparent py-10'
        }`}
    >
      <nav className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 flex justify-between items-center text-black dark:text-white">
        {/* Minimal Logo */}
        <motion.a
          href="#"
          className="text-lg font-display font-bold tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          {personalInfo.initials}<span className="text-black/20 dark:text-white/20">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          <div className="flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-mono tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors duration-500 uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-4 w-px bg-black/10 dark:bg-white/10" />

          {/* Theme Toggle & CTA */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-black/30 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="/cv-humberto-chacon.pdf"
              className="text-[10px] font-bold tracking-[0.2em] border-b border-black dark:border-white pb-1 flex items-center group"
            >
              PDF <ArrowUpRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-black/30 dark:text-white/30"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white dark:bg-black p-8 lg:hidden flex flex-col justify-center items-center space-y-12"
          >
            <button className="absolute top-8 right-8 text-black dark:text-white" onClick={() => setIsOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col items-center space-y-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-medium tracking-tighter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {link.name.split('. ')[1]}
                </motion.a>
              ))}
              <motion.a
                href="/cv-humberto-chacon.pdf"
                className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-black dark:border-white pb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Descargar CV Completo
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
