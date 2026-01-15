import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const Experience = () => {
  const { experiences } = cvData;

  return (
    <section id="experience" className="bg-white dark:bg-black py-40 overflow-hidden transition-colors duration-700">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16">

        {/* Header */}
        <div className="flex flex-col space-y-8 mb-32">
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-mono tracking-[0.4em] text-black/20 dark:text-white/20 uppercase">02 / EXPERIENCIA</span>
            <div className="h-px w-12 bg-black/10 dark:bg-white/10" />
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-medium text-black dark:text-white tracking-tighter leading-none">
            Trayectoria <br /> <span className="text-black/5 dark:text-white/5 text-outline">Evolutiva</span>
          </h2>
        </div>

        {/* Timeline Table */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="group relative border-t border-black/5 dark:border-white/5 py-20 transition-all duration-700 hover:bg-black/[0.01] dark:hover:bg-white/[0.01]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="grid lg:grid-cols-12 gap-12 items-start">

                {/* Year / Period */}
                <div className="lg:col-span-2">
                  <span className="text-2xl font-display italic text-black/20 dark:text-white/20 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {exp.period}
                  </span>
                </div>

                {/* Company & Role */}
                <div className="lg:col-span-4">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-display font-medium text-black dark:text-white tracking-tight">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <div className="w-1.5 h-1.5 bg-black/10 dark:bg-white/10" />
                      <span className="text-[10px] font-mono tracking-widest text-black/40 dark:text-white/40 uppercase">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description & Technical Keypoints */}
                <div className="lg:col-span-6">
                  <div className="space-y-12">
                    <p className="text-xl font-display font-light text-black/60 dark:text-white/60 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-x-12 gap-y-4">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <span className="text-[8px] font-mono text-black/20 dark:text-white/20">0{idx + 1}</span>
                          <span className="text-[10px] font-bold tracking-widest text-black/40 dark:text-white/40 uppercase">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
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
