import React from 'react';
import { Code, Database, Cloud, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const Skills = () => {
  const { skills } = cvData;

  const categories = [
    { title: 'Frontend', items: skills.frontend, icon: <Code className="w-8 h-8" /> },
    { title: 'Backend', items: skills.backend, icon: <Database className="w-8 h-8" /> },
    { title: 'Herramientas', items: skills.tools, icon: <Cloud className="w-8 h-8" /> }
  ];

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">Habilidades</h2>
          <div className="w-32 h-2 bg-premium-gradient mx-auto rounded-full"></div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="glass-card p-10 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="flex items-center mb-10">
              <span className="p-4 bg-secondary/10 text-secondary rounded-2xl mr-5">
                {cat.icon}
              </span>
              <h3 className="text-3xl font-black tracking-tight">{cat.title}</h3>
            </div>

            <div className="space-y-8 flex-grow">
              {cat.items.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-lg font-bold text-slate-700 dark:text-slate-300 group-hover:text-secondary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm font-black text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills Section */}
      <motion.div
        className="mt-20 glass-card p-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-2xl text-accent mb-8">
          <Cpu className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-black mb-10">Habilidades Blandas</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.soft.map((skill, idx) => (
            <motion.span
              key={skill}
              className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-lg text-slate-600 dark:text-slate-300 shadow-sm hover:shadow-xl hover:border-accent hover:text-accent transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;