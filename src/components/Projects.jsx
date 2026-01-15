import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cvData } from '../data/cvData';

const Projects = () => {
  const { projects, contact } = cvData;

  return (
    <section id="projects" className="bg-white dark:bg-black py-40 overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-700">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col space-y-8 mb-32">
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-mono tracking-[0.4em] text-black/20 dark:text-white/20 uppercase">04 / PORTAFOLIO</span>
            <div className="h-px w-12 bg-black/10 dark:bg-white/10" />
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-medium text-black dark:text-white tracking-tighter leading-none">
            Trabajos <br /> <span className="text-black/5 dark:text-white/5 text-outline">Curados</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group flex flex-col space-y-8 pb-16 border-b border-black/5 dark:border-white/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-black/20 dark:text-white/20 group-hover:text-black dark:group-hover:text-white transition-colors">
                  PROYECTO — 0{index + 1}
                </span>
                <span className="text-[10px] font-mono italic text-black/10 dark:text-white/10 uppercase tracking-widest">
                  {project.technologies[0]}
                </span>
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl lg:text-5xl font-display font-medium text-black dark:text-white tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-700">
                  {project.title}
                </h3>
                <p className="text-xl font-display font-light text-black/60 dark:text-white/60 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[10px] font-bold tracking-[0.2em] text-black/30 dark:text-white/30 uppercase">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-8 flex space-x-12">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors pb-1"
                >
                  SOURCE
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors pb-1"
                >
                  VISTA
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-48">
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-6">
              <span className="text-[10px] font-mono tracking-[0.4em] text-black/20 dark:text-white/20 uppercase">CONTINUAR</span>
              <div className="h-px w-full bg-black/5 dark:bg-white/5" />
            </div>
            <div className="flex items-baseline justify-between transition-all duration-700">
              <h3 className="text-4xl md:text-7xl font-display font-medium text-black dark:text-white tracking-tighter leading-none">
                Explorar archivos <span className="italic font-light">en GitHub</span>
              </h3>
              <ArrowUpRight className="w-12 h-12 lg:w-20 lg:h-20 text-black/10 dark:text-white/10 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-700" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
