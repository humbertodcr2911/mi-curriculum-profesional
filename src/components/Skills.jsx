import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const Skills = () => {
  const { skills } = cvData;

  const categories = [
    { title: '01 / STACK FRONTEND', items: skills.frontend },
    { title: '02 / ARQUITECTURA BACKEND', items: skills.backend },
    { title: '03 / DEVOPS & INFRAESTRUCTURA', items: skills.tools }
  ];

  return (
    <section id="skills" className="relative py-40 bg-white dark:bg-black transition-colors duration-700 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col space-y-8 mb-32">
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-mono tracking-[0.4em] text-black/20 dark:text-white/20 uppercase">03 / CAPACIDADES</span>
            <div className="h-px w-12 bg-black/10 dark:bg-white/10" />
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-medium text-black dark:text-white tracking-tighter leading-none">
            Ecosistema <br /> <span className="text-black/5 dark:text-white/5 text-outline">Tecnológico</span>
          </h2>
        </div>

        {/* Technical Grid */}
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="space-y-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase border-b border-black/5 dark:border-white/5 pb-4">
                {cat.title}
              </h3>

              <div className="flex flex-col space-y-6">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="group flex items-baseline justify-between transition-all duration-500">
                    <span className="text-xl font-display font-light text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-2 transition-all">
                      {skill.name}
                    </span>
                    <span className="text-[8px] font-mono text-black/10 dark:text-white/10 group-hover:text-black/30 dark:group-hover:text-white/30 transition-colors uppercase">
                      Expertise
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Human Focus / Soft Skills */}
        <motion.div
          className="mt-48 pt-40 border-t border-black/5 dark:border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <span className="text-[10px] font-mono tracking-[0.5em] text-black/20 dark:text-white/20 uppercase">04 / DIMENSIÓN HUMANA</span>
                <h3 className="text-4xl md:text-6xl font-display font-medium text-black dark:text-white tracking-tighter leading-tight">
                  Capacidades <br /> <span className="italic font-light">Transversales</span>
                </h3>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-16">
                {skills.soft.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    className="group space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-[10px] font-mono text-black/20 dark:text-white/20">0{idx + 1}</span>
                      <h4 className="text-[10px] font-bold tracking-[0.3em] text-black dark:text-white uppercase">
                        {skill}
                      </h4>
                    </div>
                    <div className="h-px w-full bg-black/5 dark:bg-white/5" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
