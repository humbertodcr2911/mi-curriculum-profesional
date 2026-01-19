import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cvData } from '../data/cvData';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const { personalInfo } = cvData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] transition-colors duration-700 overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
      {/* Background Text Outline - More Layered */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        <motion.span
          className="text-[60vw] md:text-[40vw] font-display font-medium text-primary/[0.04] dark:text-primary/[0.06] text-outline whitespace-nowrap"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {personalInfo.initials}
        </motion.span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16 md:space-y-32"
        >
          {/* Top Bar: Availability & Profile Image */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-12">
            <motion.div variants={itemVariants} className="flex items-center space-x-6 md:space-x-8">
              <div className="relative">
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-primary" />
                <div className="absolute inset-0 w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-primary animate-ping opacity-40" />
              </div>
              <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-black/80 dark:text-white/60 uppercase font-black">
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Profile Image Container - Premium Floating */}
            <motion.div
              variants={itemVariants}
              className="relative group self-start md:self-auto"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-700" />
              <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full border-2 border-primary/20 p-1.5 md:p-2 group-hover:border-primary transition-all duration-700 group-hover:scale-105">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/10 bg-primary/5">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 bg-primary text-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-2xl group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:-translate-y-1 md:group-hover:-translate-y-2 transition-transform duration-500"
                  initial={{ rotate: -12 }}
                  whileInView={{ rotate: 0 }}
                >
                  <span className="text-[8px] md:text-[10px] font-mono font-black tracking-widest uppercase whitespace-nowrap">Senior Lead</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Main Title Stack - Massive Impact */}
          <div className="flex flex-col space-y-8 md:space-y-12">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-medium leading-[1] md:leading-[0.9] tracking-tighter text-black dark:text-white"
            >
              <span className="text-primary block mb-2 md:mb-4">{personalInfo.name.split(' ')[0]}</span>
              <span className="text-primary/20 dark:text-primary/40 text-outline leading-none break-words">
                {personalInfo.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-2 md:mt-8 max-w-3xl relative"
            >
              <div className="absolute -left-12 top-2 w-8 h-px bg-primary/30 hidden lg:block" />
              <p className="text-base md:text-xl lg:text-2xl font-display font-light text-black/80 dark:text-white/70 leading-relaxed">
                {personalInfo.heroDescription}
              </p>
            </motion.div>
          </div>

          {/* Core Focus / Tech Detail - More Structured */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16 pt-8 md:pt-20 border-t-2 border-primary/10"
          >
            <div className="flex items-center gap-4 md:gap-8">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="space-y-1 md:space-y-3">
                <span className="text-[8px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-primary uppercase font-black">Especialización Principal</span>
                <h2 className="text-xl md:text-3xl lg:text-3xl font-display font-medium tracking-tight text-black dark:text-white leading-tight">
                  {personalInfo.specialty.split('|')[0]}
                </h2>
              </div>
            </div>

            <div className="flex items-baseline space-x-3 md:space-x-4">
              <div className="flex flex-col items-start md:items-end">
                <span className="text-[8px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-primary uppercase font-black">Trayectoria</span>
                <span className="text-4xl md:text-7xl lg:text-7xl font-display font-medium tracking-tighter text-black dark:text-white leading-none">
                  {personalInfo.experienceYears}<span className="text-primary">+</span>
                </span>
                <span className="text-[8px] md:text-[10px] font-mono tracking-widest text-primary/60 uppercase font-bold">Años de Maestría</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator - Larger */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 hidden sm:flex flex-col items-center space-y-6 md:space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] md:tracking-[0.6em] text-primary uppercase [writing-mode:vertical-lr] rotate-180 font-black">
          DESCUBRE MÁS
        </span>
        <div className="w-[1.5px] md:w-[2px] h-20 md:h-32 bg-primary/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary"
            animate={{
              height: ["0%", "100%", "0%"],
              top: ["0%", "0%", "100%"]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
