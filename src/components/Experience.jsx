import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const Experience = () => {
  const { experiences } = cvData;

  return (
    <section id="experience" className="bg-slate-50 dark:bg-primary-dark/30 py-32 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">Experiencia</h2>
            <div className="w-32 h-2 bg-premium-gradient mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 md:pl-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Year/Period Side (Desktop) */}
                <div className="hidden md:block w-1/4 pt-8 text-right">
                  <span className="text-2xl font-black text-slate-300 dark:text-slate-700 tracking-tighter">
                    {exp.period.split(' ')[0]}
                  </span>
                </div>

                {/* Timeline Dot & Line */}
                <div className="absolute left-0 md:left-1/4 top-0 bottom-0 md:-ml-0.5 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-premium-gradient p-1 shadow-xl z-10 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  {index !== experiences.length - 1 && (
                    <div className="w-1 flex-grow bg-slate-200 dark:bg-slate-800 rounded-full" />
                  )}
                </div>

                {/* Card Side */}
                <div className="flex-grow md:pt-4">
                  <div className="glass-card p-8 md:p-10 group hover:shadow-2xl transition-all duration-500">
                    <div className="flex flex-wrap justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-black group-hover:text-gradient transition-all mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-xl font-bold text-secondary">
                          {exp.company}
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 flex flex-col items-end gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center">
                        <ChevronRight className="w-4 h-4 mr-1 text-secondary" />
                        Logros destacados
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                            <span className="text-secondary font-black mr-3">#</span>
                            <span className="text-slate-600 dark:text-slate-300 font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
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