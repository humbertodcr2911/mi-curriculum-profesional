import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../data/cvData';
import { exportToPDF } from '../utils/pdfExport';

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { personalInfo } = cvData;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExportPDF = (e) => {
    e.preventDefault();
    exportToPDF(personalInfo.name.replace(/\s+/g, '_'));
  };

  const navLinks = [
    { name: '01. SOBRE MÍ', href: '#about' },
    { name: '02. EXPERIENCIA', href: '#experience' },
    { name: '03. PROYECTOS', href: '#projects' },
    { name: '04. EDUCACIÓN', href: '#education' },
    { name: '05. CONTACTO', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 no-print ${scrolled ? 'bg-white dark:bg-[#050505] shadow-2xl py-4 border-b border-primary/20' : 'bg-transparent py-10'
        }`}
    >
      <nav className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 flex justify-between items-center text-black dark:text-white">
        {/* Minimal Logo */}
        <motion.a
          href="#"
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-primary">{personalInfo.initials}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-16">
          <div className="flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-mono tracking-[0.25em] text-black/60 dark:text-white/50 hover:text-primary dark:hover:text-primary transition-all duration-300 uppercase font-black"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-black/10 dark:bg-white/10" />

          {/* Theme Toggle & CTA */}
          <div className="flex items-center space-x-10">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative p-2.5 rounded-full hover:bg-primary/10 transition-colors text-black/60 dark:text-white/60 hover:text-primary dark:hover:text-primary flex items-center justify-center overflow-hidden w-11 h-11 border border-primary/5"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? 'sun' : 'moon'}
                  initial={{ y: 20, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.3, ease: "anticipate" }}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </button>
            <a
              href="#"
              onClick={handleExportPDF}
              className="text-[11px] font-black tracking-[0.2em] px-8 py-3.5 bg-primary text-white hover:bg-primary-dark transition-all rounded-sm flex items-center group shadow-xl shadow-primary/30"
            >
              RESUMEN PDF <ArrowUpRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-primary/5 text-primary"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 text-primary border border-primary/20 rounded-sm"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0A0A0B] p-8 lg:hidden flex flex-col justify-center items-start space-y-12"
          >
            <div className="absolute top-8 right-8 flex items-center gap-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-full bg-primary/5 text-primary"
              >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <button className="p-3 text-primary border border-primary/20 rounded-sm" onClick={() => setIsOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col items-start space-y-6 sm:space-y-10 w-full pl-4 overflow-y-auto max-h-[70vh]">
              <span className="text-[10px] font-mono tracking-[0.5em] text-primary/40 uppercase mb-2">NAVEGACIÓN</span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl sm:text-6xl font-display font-medium tracking-tight hover:text-primary transition-all group flex items-baseline gap-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                >
                  <span className="text-lg font-mono text-primary/20 group-hover:text-primary transition-colors">0{idx + 1}</span>
                  {link.name.split('. ')[1]}
                </motion.a>
              ))}
              <motion.a
                href="#"
                onClick={handleExportPDF}
                className="mt-8 text-[11px] font-black tracking-[0.4em] uppercase bg-primary text-white px-8 py-4 rounded-sm shadow-2xl shadow-primary/40 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                DESCARGAR PDF <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </nav>

            <div className="absolute bottom-12 left-12">
              <span className="text-[10px] font-mono tracking-widest text-black/20 dark:text-white/20 uppercase">Caracas, Venezuela — {new Date().getFullYear()}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
