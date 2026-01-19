import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Globe } from 'lucide-react';
import { cvData } from '../data/cvData';

const Projects = () => {
  const { projects, contact } = cvData;

  return (
    <section id="projects" className="bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] py-24 md:py-32 lg:py-40 overflow-hidden border-t border-primary/10 transition-colors duration-700">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header - Massive Impact */}
        <div className="flex flex-col space-y-8 md:space-y-12 mb-20 md:mb-40">
          <div className="flex items-center space-x-6 md:space-x-8">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary uppercase font-black">04 / PORTAFOLIO</span>
            <div className="h-px w-16 md:w-24 bg-primary/20" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-medium text-black dark:text-white tracking-tight leading-tight break-words">
            Proyectos <br /> <span className="text-primary/30 dark:text-primary/50 text-outline italic">Curados</span>
          </h2>
        </div>

        {/* Projects Grid - More Robust */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group flex flex-col space-y-8 md:space-y-12 pb-12 md:pb-24 border-b-2 border-primary/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] md:text-xs font-mono text-primary/40 group-hover:text-primary transition-colors font-black uppercase">
                  PROYECTO // 0{index + 1}
                </span>
                <div className="flex gap-4">
                  <Globe className="w-4 h-4 md:w-5 md:h-5 text-primary/10 group-hover:text-primary transition-colors" />
                </div>
              </div>

              <div className="space-y-4 md:space-y-8">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-medium text-black dark:text-white tracking-tight leading-tight group-hover:text-primary group-hover:translate-x-2 md:group-hover:translate-x-6 transition-all duration-700 break-words">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl lg:text-xl font-display font-light text-black/70 dark:text-white/60 leading-relaxed capitalize-first">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6 pt-2 md:pt-4">
                {project.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2 md:gap-3">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    <span className="text-[10px] md:text-xs font-black tracking-[0.15em] md:tracking-[0.2em] text-primary/40 dark:text-primary/40 uppercase">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-8 md:pt-12 flex items-center space-x-10 md:space-x-16">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase border-b-2 border-primary/10 hover:border-primary text-primary/60 hover:text-primary transition-all pb-2 md:pb-3"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" /> SOURCE
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase border-b-2 border-primary/10 hover:border-primary text-primary/60 hover:text-primary transition-all pb-2 md:pb-3"
                >
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" /> VISTA
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA - Massive */}
        <div className="mt-40 md:mt-60">
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col space-y-8 md:space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-6 md:space-x-10">
              <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary uppercase font-black">CONTINUAR EXPLORANDO</span>
              <div className="h-[1.5px] md:h-[2px] w-full bg-primary/10 scale-x-100 group-hover:bg-primary transition-colors origin-left" />
            </div>
            <div className="flex items-center justify-between transition-all duration-700">
              <h3 className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-display font-medium text-black dark:text-white tracking-tight leading-tight group-hover:text-primary break-words">
                Ver Repositorios <br /> <span className="italic font-light text-primary/40">en GitHub</span>
              </h3>
              <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-2 border-primary/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-700 shrink-0 group-hover:translate-x-2 md:group-hover:translate-x-8 group-hover:-translate-y-2 md:group-hover:-translate-y-8">
                <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-primary group-hover:text-white transition-all " />
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
