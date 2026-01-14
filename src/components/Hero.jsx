import React from 'react';
import { ArrowDown, Sparkles, Send, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const Hero = () => {
  const { personalInfo } = cvData;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10" />

      <div className="section-container grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-8 px-4 py-2 rounded-2xl glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-slate-600 dark:text-slate-300 tracking-wide uppercase">
              {personalInfo.availability}
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
            Hola, soy <br />
            <span className="text-gradient">
              {personalInfo.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-slate-600 dark:text-slate-400 mb-8 font-display">
            {personalInfo.specialty}
          </h2>

          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            {personalInfo.heroDescription}
          </p>

          <div className="flex flex-wrap gap-5 no-print">
            <motion.a
              href="#contact"
              className="btn-primary scale-110"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5 mr-2" />
              Contáctame
            </motion.a>
            <motion.button
              onClick={() => window.print()}
              className="btn-outline scale-110"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5 mr-2" />
              Descargar CV
            </motion.button>
          </div>

          <div className="mt-16 flex items-center space-x-8 opacity-50 dark:opacity-30">
            <div className="flex flex-col">
              <span className="text-3xl font-black">{personalInfo.experienceYears}+</span>
              <span className="text-xs uppercase font-bold tracking-widest">Años de Exp.</span>
            </div>
            <div className="w-px h-10 bg-slate-300 dark:bg-slate-700" />
            <div className="flex flex-col">
              <span className="text-3xl font-black">100%</span>
              <span className="text-xs uppercase font-bold tracking-widest">Compromiso</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-[500px] ml-auto">
            {/* Visual element representing a modern profile/abstract shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-[60px] blur-2xl opacity-20 transform rotate-6 animate-pulse" />
            <div className="relative glass-card w-full h-full flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-800">
              <motion.div
                className="text-[200px] font-black pointer-events-none opacity-10 dark:opacity-5 select-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {personalInfo.initials}
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-black text-gradient drop-shadow-2xl">
                  {personalInfo.initials}
                </div>
              </div>

              {/* Floating blobs */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-secondary/30 rounded-full blur-xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-32 h-32 bg-accent/30 rounded-full blur-2xl"
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>

            {/* Status badges */}
            <motion.div
              className="absolute -top-6 -right-6 glass-card p-4 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                <span className="text-sm font-bold uppercase tracking-tighter">Remote Ready</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-4 rounded-full glass-card hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.a>
    </section>
  );
};

export default Hero;