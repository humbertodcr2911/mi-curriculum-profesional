import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const About = () => {
  const { personalInfo } = cvData;

  return (
    <section id="about" className="relative py-40 bg-white dark:bg-black transition-colors duration-700 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Header */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-6">
                <span className="text-[10px] font-mono tracking-[0.4em] text-black/20 dark:text-white/20 uppercase">01 / PERFIL</span>
                <div className="h-px w-12 bg-black/10 dark:bg-white/10" />
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-medium text-black dark:text-white tracking-tighter">
                Sobre <br /> <span className="text-black/5 dark:text-white/5 text-outline">Génesis</span>
              </h2>

              <div className="pt-12 space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Ubicación</span>
                <p className="text-xl font-display italic text-black dark:text-white">Caracas, Venezuela</p>

                {personalInfo.birthDate && (
                  <div className="pt-4 space-y-4">
                    <span className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Nacimiento</span>
                    <p className="text-xl font-display italic text-black dark:text-white">{personalInfo.birthDate}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-7 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="space-y-8">
                {personalInfo.aboutHistory.map((paragraph, index) => (
                  <p key={index} className="text-xl md:text-2xl font-display font-light text-black/60 dark:text-white/60 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Minimal Call to Action */}
              <div className="pt-12">
                <a href="#experience" className="btn-minimal group">
                  <span>HISTORIAL PROFESIONAL</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
