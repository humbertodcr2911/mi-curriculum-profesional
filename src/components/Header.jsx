import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { cvData } from '../data/cvData';
import { exportToPDF } from '../utils/pdfExport';
import bgGlobal from '../assets/bg_global.png';

const Header = ({ theme, setTheme, scrolledForce }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = scrolledForce;
  const { personalInfo } = cvData;

  // Internal scroll detection removed in favor of scrolledForce prop from App.jsx
  
  const handleExportPDF = (e) => {
    e.preventDefault();
    exportToPDF(personalInfo.name.replace(/\s+/g, '_'));
  };

  const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark);

  const navLinks = [
    { name: '01. SOBRE MÍ', href: '#about' },
    { name: '02. EXPERIENCIA', href: '#experience' },
    { name: '03. PROYECTOS', href: '#projects' },
    { name: '04. EDUCACIÓN', href: '#education' },
    { name: '05. CONTACTO', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 no-print ${scrolled ? 'bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl shadow-2xl py-4 border-b border-primary/20' : 'bg-transparent py-10'
        }`}
    >
      <nav className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 flex justify-between items-center text-black dark:text-white">
        {/* Minimal Logo */}
        <Motion.a
          href="#"
          className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-primary">{personalInfo.initials}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        </Motion.a>

        {/* Desktop Navigation - Optimized Spacing */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-16">
          <div className="flex space-x-6 xl:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] xl:text-[11px] font-mono tracking-[0.15em] xl:tracking-[0.25em] text-black/90 dark:text-white/50 hover:text-primary dark:hover:text-primary transition-all duration-300 uppercase font-black"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-black/10 dark:bg-white/10" />

          {/* Theme Toggle & CTA */}
          <div className="flex items-center space-x-10">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="relative p-2.5 rounded-full hover:bg-primary/10 transition-colors text-black/90 dark:text-white/60 hover:text-primary dark:hover:text-primary flex items-center justify-center overflow-hidden w-11 h-11 border border-primary/5"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <Motion.div
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ y: 20, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.3, ease: "anticipate" }}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Motion.div>
              </AnimatePresence>
            </button>
            <a
              href="#"
              onClick={handleExportPDF}
              className="text-[10px] xl:text-[11px] font-black tracking-[0.15em] xl:tracking-[0.2em] px-5 xl:px-8 py-3 xl:py-3.5 bg-primary text-white hover:bg-primary-dark transition-all rounded-sm flex items-center group shadow-xl shadow-primary/30"
            >
              RESUMEN PDF <ArrowUpRight className="ml-2 xl:ml-3 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-6">
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2.5 rounded-full bg-primary/5 text-primary"
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
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
          <Motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white dark:bg-[#0A0A0B] p-6 sm:p-12 lg:hidden flex flex-col justify-start items-start overflow-y-auto"
          >
            {/* Cinematic Menu Background */}
            <div className="absolute inset-0 z-0 bg-white dark:bg-[#0A0A0B]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.05] dark:opacity-[0.1] scale-125"
                style={{ backgroundImage: `url(${bgGlobal})` }}
              />
              <div className="absolute inset-0 bg-white/95 dark:bg-[#0A0A0B]/98" />
            </div>

            <div className="relative z-10 w-full flex flex-col min-h-full">
              <div className="flex justify-between items-center w-full mb-12">
                <div className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group">
                  <span className="text-primary">{personalInfo.initials}</span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTheme(isDark ? 'light' : 'dark')}
                    className="p-3 rounded-full bg-primary/5 text-primary"
                    aria-label="Toggle theme"
                  >
                    {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                  </button>
                  <button
                    className="p-3 text-primary border border-primary/20 rounded-sm"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>
              </div>

              <nav className="flex flex-col items-start space-y-8 w-full pl-4 py-8">
                <span className="text-[10px] font-mono tracking-[0.5em] text-primary/40 uppercase mb-4">NAVEGACIÓN</span>
                {navLinks.map((link, idx) => (
                  <Motion.a
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
                  </Motion.a>
                ))}
                <Motion.a
                  href="#"
                  onClick={handleExportPDF}
                  className="mt-8 text-[11px] font-black tracking-[0.4em] uppercase bg-primary text-white px-8 py-4 rounded-sm shadow-2xl shadow-primary/40 flex items-center gap-4 w-fit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  DESCARGAR PDF <ArrowUpRight className="w-4 h-4" />
                </Motion.a>
              </nav>

              <div className="mt-auto pt-12 pb-8">
                <span className="text-[10px] font-mono tracking-widest text-black/40 dark:text-white/40 uppercase">Caracas, Venezuela — {new Date().getFullYear()}</span>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
