import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

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
    <section className="relative min-h-screen flex flex-col justify-center bg-white dark:bg-black transition-colors duration-700 overflow-hidden pt-32">
      {/* Background Text Outline */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        <span className="text-[30vw] font-display font-medium text-black/[0.02] dark:text-white/[0.02] text-outline opacity-20 whitespace-nowrap">
          {personalInfo.initials}
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* Availability Indicator */}
          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            <div className="w-1.5 h-1.5 bg-black dark:bg-white animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-black/40 dark:text-white/40 uppercase">
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Main Title Stack */}
          <div className="flex flex-col">
            <motion.h1
              variants={itemVariants}
              className="text-[12vw] lg:text-[10vw] font-display font-medium leading-[0.85] tracking-tighter text-black dark:text-white"
            >
              {personalInfo.name.split(' ')[0]} <br />
              <span className="text-black/5 dark:text-white/5 text-outline">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-12 max-w-3xl"
            >
              <p className="text-xl lg:text-2xl font-display font-light text-black/60 dark:text-white/60 leading-relaxed indent-24">
                {personalInfo.heroDescription}
              </p>
            </motion.div>
          </div>

          {/* Core Focus / Tech Detail */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12 pt-12 border-t border-black/5 dark:border-white/5"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Especialización</span>
              <h2 className="text-2xl font-display italic font-light tracking-tight text-black dark:text-white">
                {personalInfo.specialty.split('|')[0]}
              </h2>
            </div>

            <div className="flex flex-col items-start md:items-end space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Evolución</span>
              <span className="text-5xl font-display font-medium tracking-tighter text-black dark:text-white">
                {personalInfo.experienceYears}+ AÑOS
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] font-mono tracking-[0.5em] text-black/20 dark:text-white/20 uppercase [writing-mode:vertical-lr] rotate-180">
          EXPLORAR MÁS
        </span>
        <div className="w-px h-24 bg-black/10 dark:bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-black dark:bg-white"
            animate={{
              height: ["0%", "100%", "0%"],
              top: ["0%", "0%", "100%"]
            }}
            transition={{
              duration: 3,
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
