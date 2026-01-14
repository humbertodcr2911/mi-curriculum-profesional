import React from 'react';
import { ExternalLink, Github, Star, Layout } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const Projects = () => {
  const { projects, contact } = cvData;

  return (
    <section id="projects" className="bg-slate-50 dark:bg-primary-dark/30 py-32">
      <div className="section-container">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">Proyectos</h2>
            <div className="w-32 h-2 bg-premium-gradient mx-auto rounded-full"></div>
            <p className="text-xl text-slate-500 dark:text-slate-400 mt-8 max-w-2xl mx-auto">
              Una selección de trabajos recientes que muestran mi capacidad para resolver problemas complejos.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group glass-card overflow-hidden flex flex-col ${project.featured ? 'md:col-span-2 lg:col-span-3 lg:flex-row' : ''
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2 min-h-[300px]' : 'h-64'
                }`}>
                <div className="absolute inset-0 bg-premium-gradient opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center transform transition-all duration-500 group-hover:scale-110">
                    <Layout className="w-20 h-20 text-white/50 mb-4 mx-auto" />
                    <div className="text-4xl font-black text-white tracking-widest uppercase opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.title.split(' ')[0]}
                    </div>
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-6 left-6 flex items-center bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl shadow-xl">
                    <Star className="w-5 h-5 text-yellow-500 mr-2 fill-yellow-500" />
                    <span className="text-sm font-black uppercase tracking-widest">Featured Project</span>
                  </div>
                )}
              </div>

              <div className={`p-10 flex flex-col justify-between ${project.featured ? 'lg:w-1/2' : ''
                }`}>
                <div>
                  <h3 className="text-3xl font-black mb-4 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-xl text-sm font-bold border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-500 hover:text-secondary font-black text-sm uppercase tracking-widest transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Source
                  </motion.a>

                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-2.5 !px-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-12 py-5 text-xl group"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="w-6 h-6 mr-3 transition-transform group-hover:rotate-12" />
            <span>Explorar más en GitHub</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;