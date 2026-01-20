import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Quote } from 'lucide-react';
import { cvData } from '../data/cvData';
import bgNodes from '../assets/bg_nodes.png';

const Education = () => {
  const { education, certifications, personalInfo } = cvData;

  return (
    <section id="education" className="relative py-24 md:py-32 lg:py-60 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] transition-colors duration-700 overflow-hidden border-t border-primary/10">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] dark:opacity-[0.1] grayscale invert dark:invert-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgNodes})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[var(--color-bg-dark)] dark:via-transparent dark:to-[var(--color-bg-dark)]" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header - Massive Impact */}
        <div className="flex flex-col space-y-8 md:space-y-12 mb-20 md:mb-48">
          <div className="flex items-center space-x-6 md:space-x-8">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary uppercase font-black">05 / CREDENCIALES</span>
            <div className="h-px w-16 md:w-24 bg-primary/20" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-medium text-black dark:text-white tracking-tight leading-tight break-words">
            Formación <br /> <span className="text-primary/55 dark:text-primary/50 text-outline italic">& Honores</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 lg:gap-32">

          {/* Academic Journey */}
          <div className="lg:col-span-7 space-y-12 md:space-y-20">
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-4 md:gap-6">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-primary/40 group-hover:text-primary transition-colors" />
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-primary uppercase font-black">Ruta Académica</span>
              </div>
              <div className="h-[2px] grow bg-primary/5 ml-6 md:ml-8 group-hover:bg-primary/20 transition-all origin-left scale-x-50 group-hover:scale-x-100" />
            </div>

            <div className="space-y-16 md:space-y-32">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="group space-y-6 md:space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary transition-colors shrink-0" />
                      <span className="text-xs md:text-sm font-mono text-primary font-black tracking-widest">{edu.period}</span>
                    </div>
                    <span className="text-[8px] md:text-[10px] font-mono text-primary/10 group-hover:text-primary transition-colors uppercase font-black border border-primary/5 px-3 md:px-4 py-1 rounded-full whitespace-nowrap">INGENIERÍA</span>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-medium text-black dark:text-white tracking-tight group-hover:text-primary group-hover:translate-x-2 md:group-hover:translate-x-6 transition-all duration-700 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-lg md:text-xl lg:text-2xl font-display italic text-primary/60 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-500">
                      {edu.institution}
                    </p>
                    <p className="text-base md:text-xl lg:text-xl font-display font-light text-black dark:text-white/60 leading-relaxed max-w-2xl capitalize-first">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications and Quote */}
          <div className="lg:col-span-5 space-y-12 md:space-y-20">
            <div className="flex items-center justify-between group">
              <div className="flex items-center gap-4 md:gap-6">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-primary/40 group-hover:text-primary transition-colors" />
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-primary uppercase font-black">Validaciones</span>
              </div>
              <div className="h-[2px] grow bg-primary/5 ml-6 md:ml-8 group-hover:bg-primary/20 transition-all origin-left scale-x-50 group-hover:scale-x-100" />
            </div>

            <div className="space-y-4 md:space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center justify-between py-6 md:py-8 border-b-2 border-primary/5 hover:border-primary/20 transition-all"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-xs md:text-sm lg:text-base font-black tracking-[0.1em] md:tracking-[0.2em] text-black/90 dark:text-white/50 group-hover:text-primary transition-all group-hover:translate-x-2 md:group-hover:translate-x-4 uppercase pr-4">
                    {cert}
                  </span>
                  <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-primary/10 group-hover:bg-primary transition-all group-hover:scale-150 shadow-2xl shadow-primary shrink-0" />
                </motion.div>
              ))}
            </div>

            {/* Quote / Philosophy - High Impact */}
            <motion.div
              className="mt-20 md:mt-48 pt-10 md:pt-20 bg-primary/[0.03] dark:bg-primary/[0.03] p-8 md:p-16 border border-primary/10 relative overflow-hidden group rounded-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Quote className="absolute -top-4 -right-4 w-20 h-20 md:w-32 md:h-32 text-primary/[0.05] group-hover:text-primary/10 transition-colors rotate-12" />
              <div className="absolute top-0 left-0 w-1.5 md:w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <p className="text-xl md:text-2xl lg:text-3xl font-display font-light text-black/90 dark:text-white/50 leading-tight italic relative z-10 group-hover:text-black dark:group-hover:text-white transition-all duration-700">
                "{personalInfo.philosophy || 'Comprometido con la maestría técnica profunda en un estado de evolución permanente.'}"
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
