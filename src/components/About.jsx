import React from 'react';
import { ArrowDownRight, MapPin, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const About = () => {
  const { personalInfo } = cvData;

  return (
    <section id="about" className="relative py-24 md:py-40 lg:py-60 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] transition-colors duration-700 overflow-hidden border-t border-primary/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 lg:gap-32">

          {/* Header */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 md:space-y-12"
            >
              <div className="flex items-center space-x-6 md:space-x-10">
                <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary uppercase font-black">01 / PERFIL</span>
                <div className="h-px w-16 md:w-24 bg-primary/20" />
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-display font-medium text-black dark:text-white tracking-tight leading-none break-words">
                Sobre <br /> <span className="text-primary/30 dark:text-primary/50 text-outline italic">Humberto</span>
              </h2>

              <div className="pt-10 md:pt-20 space-y-8 md:space-y-12">
                <div className="flex items-start gap-5 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <span className="text-[8px] md:text-[10px] font-mono tracking-widest text-primary uppercase font-black">Residencia</span>
                    <p className="text-2xl md:text-3xl font-display italic text-black dark:text-white">Caracas, Venezuela</p>
                  </div>
                </div>

                {personalInfo.birthDate && (
                  <div className="flex items-start gap-5 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <span className="text-[8px] md:text-[10px] font-mono tracking-widest text-primary uppercase font-black">Cronología</span>
                      <p className="text-2xl md:text-3xl font-display italic text-black dark:text-white">{personalInfo.birthDate}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-7 lg:pt-48">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12 md:space-y-16"
            >
              <div className="space-y-8 md:space-y-12">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                  <User className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                {personalInfo.aboutHistory.map((paragraph, index) => (
                  <p key={index} className="text-lg md:text-xl lg:text-2xl font-display font-light text-black/80 dark:text-white/70 leading-relaxed first-letter:text-3xl md:first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-3">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Minimal Call to Action */}
              <div className="pt-8 md:pt-16">
                <a href="#experience" className="inline-flex items-center gap-4 md:gap-6 text-xs md:text-sm font-black tracking-[0.3em] md:tracking-[0.4em] uppercase bg-primary text-white px-8 md:px-12 py-4 md:py-6 rounded-sm shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all group">
                  <span>HISTORIAL PROFESIONAL</span>
                  <ArrowDownRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
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
