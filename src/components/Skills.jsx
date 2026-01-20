import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { Monitor, Server, Cpu, Zap, Code2, Layers } from 'lucide-react';

const Skills = () => {
  const { skills } = cvData;

  const categories = [
    { title: 'STACK FRONTEND', items: skills.frontend, icon: <Monitor className="w-8 h-8" />, color: 'primary' },
    { title: 'ARQUITECTURA BACKEND', items: skills.backend, icon: <Server className="w-8 h-8" />, color: 'primary' },
    { title: 'DEVOPS & INFRAESTRUCTURA', items: skills.tools, icon: <Cpu className="w-8 h-8" />, color: 'primary' }
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 lg:py-60 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] transition-colors duration-700 overflow-hidden border-t border-primary/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header - Massive Impact */}
        <div className="flex flex-col space-y-8 md:space-y-12 mb-20 md:mb-48">
          <div className="flex items-center space-x-6 md:space-x-8">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary uppercase font-black">03 / CAPACIDADES</span>
            <div className="h-px w-12 md:w-24 bg-primary/20" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-medium text-black dark:text-white tracking-tight leading-tight break-words">
            Ecosistema <br /> <span className="text-primary/55 dark:text-primary/50 text-outline italic">Tecnológico</span>
          </h2>
        </div>

        {/* Technical Grid - Enhanced Prominence */}
        <div className="grid lg:grid-cols-3 gap-16 md:gap-24 lg:gap-32">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="space-y-10 md:space-y-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="space-y-6 md:space-y-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                  {React.cloneElement(cat.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                </div>
                <h3 className="text-[10px] md:text-sm font-mono tracking-[0.2em] md:tracking-[0.3em] text-primary uppercase border-b-2 border-primary/10 pb-4 md:pb-6 font-black">
                  {i + 1} // {cat.title}
                </h3>
              </div>

              <div className="flex flex-col space-y-6 md:space-y-8">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="group flex items-center justify-between transition-all duration-500">
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                      <span className="text-xl md:text-xl font-display font-light text-black dark:text-white/70 group-hover:text-primary group-hover:translate-x-2 md:group-hover:translate-x-4 transition-all duration-500">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-primary/10 group-hover:text-primary transition-colors" />
                      <span className="text-[10px] font-mono text-primary/20 group-hover:text-primary transition-colors uppercase font-black">
                        PRO
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Human Focus / Soft Skills - Redesigned */}
        <motion.div
          className="mt-32 md:mt-48 lg:mt-60 pt-24 md:pt-40 lg:pt-60 border-t-2 border-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
            <div className="lg:col-span-5">
              <div className="space-y-8 md:space-y-12">
                <div className="flex items-center space-x-6 md:space-x-8">
                  <Layers className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary uppercase font-black">04 / DIMENSIÓN HUMANA</span>
                </div>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-black dark:text-white tracking-tighter leading-tight">
                  Capacidades <br /> <span className="text-primary/55 dark:text-primary/50 text-outline italic font-light leading-none">Transversales</span>
                </h3>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 md:gap-y-16 gap-x-12 md:gap-x-20">
                {skills.soft.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    className="group space-y-4 md:space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center space-x-4 md:space-x-6">
                      <span className="text-xs md:text-sm font-mono text-primary/30 group-hover:text-primary transition-colors font-black">0{idx + 1}</span>
                      <h4 className="text-xl md:text-xl font-display font-medium text-black/90 dark:text-white/70 group-hover:text-primary uppercase transition-colors tracking-tighter">
                        {skill}
                      </h4>
                    </div>
                    <div className="h-[2px] w-full bg-primary/5 group-hover:bg-primary/20 transition-all duration-700 origin-left scale-x-50 group-hover:scale-x-100" />
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
