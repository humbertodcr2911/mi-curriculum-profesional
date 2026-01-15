import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const Education = () => {
  const { education, certifications } = cvData;

  return (
    <section id="education" className="relative py-40 bg-white dark:bg-black transition-colors duration-700 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col space-y-8 mb-32">
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-mono tracking-[0.4em] text-black/20 dark:text-white/20 uppercase">05 / CREDENCIALES</span>
            <div className="h-px w-12 bg-black/10 dark:bg-white/10" />
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-medium text-black dark:text-white tracking-tighter leading-none">
            Formación <br /> <span className="text-black/5 dark:text-white/5 text-outline">& Honores</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-24">

          {/* Academic Journey */}
          <div className="lg:col-span-7 space-y-16">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Ruta Académica</span>
              <div className="h-px grow bg-black/5 dark:bg-white/5 ml-8" />
            </div>

            <div className="space-y-24">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="group space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] font-mono text-black/20 dark:text-white/20">{edu.period}</span>
                    <span className="text-[8px] font-mono text-black/10 dark:text-white/10 uppercase">Ingeniería</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-display font-medium text-black dark:text-white tracking-tight group-hover:translate-x-4 transition-transform duration-700">
                      {edu.degree}
                    </h3>
                    <p className="text-xl font-display italic text-black/40 dark:text-white/40">
                      {edu.institution}
                    </p>
                    <p className="text-lg font-display font-light text-black/60 dark:text-white/60 leading-relaxed max-w-xl">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications and Quote */}
          <div className="lg:col-span-5 space-y-16">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Validaciones</span>
              <div className="h-px grow bg-black/5 dark:bg-white/5 ml-8" />
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group flex items-center justify-between py-6 border-b border-black/5 dark:border-white/5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors uppercase">
                    {cert}
                  </span>
                  <div className="w-1 h-1 bg-black/10 dark:bg-white/10 group-hover:scale-150 transition-transform" />
                </motion.div>
              ))}
            </div>

            {/* Quote / Philosophy */}
            <motion.div
              className="mt-32 pt-16 bg-black/[0.02] dark:bg-white/[0.02] p-12 border border-black/5 dark:border-white/5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl font-display font-light text-black/40 dark:text-white/40 leading-relaxed italic">
                "Comprometido con la maestría técnica profunda en un estado de evolución permanente."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
