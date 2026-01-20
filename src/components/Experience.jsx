import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import bgCircuitry from '../assets/bg_circuitry.png';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const { experiences } = cvData;

  return (
    <section id="experience" className="relative py-24 md:py-40 lg:py-60 bg-white dark:bg-[#050505] transition-colors duration-700 overflow-hidden">
      {/* Technical Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07] grayscale invert dark:invert-0">
        <div
          className="absolute inset-0 bg-[length:400px_400px] bg-repeat opacity-50"
          style={{ backgroundImage: `url(${bgCircuitry})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[#050505] dark:via-transparent dark:to-[#050505]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header - More Impactful */}
        <div className="flex flex-col space-y-8 md:space-y-12 mb-20 md:mb-40">
          <div className="flex items-center space-x-6 md:space-x-8">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary uppercase font-black">02 / TRAYECTORIA</span>
            <div className="h-px w-16 md:w-24 bg-primary/20" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-medium text-black dark:text-white tracking-tight leading-tight break-words">
            Trayectoria <br /> <span className="text-primary/55 dark:text-primary/50 text-outline italic">Profesional</span>
          </h2>
        </div>

        {/* Content - More Spacious */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="group relative border-t-2 border-primary/5 dark:border-primary/5 py-12 md:py-24 transition-all duration-700 hover:bg-primary/[0.01]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24 items-start">

                {/* Left Column: Period & Organization */}
                <div className="lg:col-span-4 space-y-4 md:space-y-8">
                  <div className="flex items-center space-x-4 text-primary">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    <span className="text-2xl md:text-3xl font-display italic text-primary/80 dark:text-primary/20 group-hover:text-primary transition-colors font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <div className="space-y-1.5 md:space-y-3">
                    <span className="text-[8px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-primary dark:text-primary/40 uppercase font-black">Organización</span>
                    <h4 className="text-3xl md:text-3xl lg:text-4xl font-display font-light text-black dark:text-white group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-500 leading-tight break-words">
                      {exp.company}
                    </h4>
                  </div>
                </div>

                {/* Right Column: Role & Achievements */}
                <div className="lg:col-span-8 space-y-8 md:space-y-12 mt-6 lg:mt-0">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-sm bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                        <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-black dark:text-white tracking-tight group-hover:text-primary transition-colors leading-tight break-words">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl font-display font-light text-black dark:text-white/60 leading-relaxed max-w-3xl">
                      {exp.description}
                    </p>
                  </div>

                  {/* Achievements Grid */}
                  <div className="grid sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 md:gap-y-8 pt-4 md:pt-6">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start space-x-3 md:space-x-4 group/item">
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 mt-1 text-primary/60 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all shrink-0" />
                        <p className="text-base md:text-lg lg:text-xl font-display font-light text-black/90 dark:text-white/50 leading-snug">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
