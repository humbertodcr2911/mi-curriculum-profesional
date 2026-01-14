import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const Education = () => {
  const { education, certifications } = cvData;

  return (
    <section id="education" className="section-container relative">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">Educación</h2>
          <div className="w-32 h-2 bg-premium-gradient mx-auto rounded-full"></div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Academic Path */}
        <div className="space-y-10">
          <h3 className="text-3xl font-black mb-12 flex items-center font-display">
            <span className="p-4 glass-card mr-5 text-secondary">
              <GraduationCap className="w-8 h-8" />
            </span>
            Formación Académica
          </h3>

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                className="relative pl-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="absolute left-0 top-0 w-1.5 h-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-premium-gradient rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.3 }}
                  />
                </div>
                <div className="absolute -left-3 top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-secondary flex items-center justify-center shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>

                <div>
                  <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-xl text-sm font-black mb-4 uppercase tracking-widest">
                    {edu.period}
                  </span>
                  <h4 className="text-3xl font-black mb-2 tracking-tight group-hover:text-gradient transition-all">
                    {edu.degree}
                  </h4>
                  <p className="text-xl font-bold text-slate-500 dark:text-slate-400 mb-4 font-display">
                    {edu.institution}
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <div>
          <h3 className="text-3xl font-black mb-12 flex items-center font-display">
            <span className="p-4 glass-card mr-5 text-accent">
              <Award className="w-8 h-8" />
            </span>
            Certificaciones
          </h3>

          <div className="glass-card p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-accent/10" />

            <div className="relative z-10">
              <div className="flex items-center mb-12">
                <div className="p-4 bg-accent/10 rounded-2xl mr-6 text-accent">
                  <BookOpen className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-black tracking-tight">Aprendizaje Perpetuo</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-bold">Búsqueda constante de excelencia</p>
                </div>
              </div>

              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-6 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all hover:shadow-xl hover:translate-x-3 duration-500"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-premium-gradient p-2 flex items-center justify-center mr-6 shadow-lg shadow-accent/20">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-slate-700 dark:text-slate-200">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;