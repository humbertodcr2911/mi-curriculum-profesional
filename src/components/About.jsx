import React from 'react';
import { User, Target, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const About = () => {
  const { personalInfo } = cvData;

  const cards = [
    {
      title: "Calidad y Mejora Continua",
      desc: "Comprometido con la excelencia técnica y el aprendizaje continuo de nuevas tecnologías.",
      icon: <Zap className="w-6 h-6 text-accent" />,
    },
    {
      title: "Arquitectura Robusta",
      desc: "Enfoque en sistemas escalables, seguros y fáciles de mantener.",
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
    }
  ];

  return (
    <section id="about" className="section-container relative">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">Sobre Mí</h2>
          <div className="w-32 h-2 bg-premium-gradient mx-auto rounded-full"></div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-8 flex items-center font-display">
            <span className="p-3 glass-card mr-4">
              <User className="text-secondary" />
            </span>
            Mi Historia
          </h3>
          <div className="space-y-6">
            {personalInfo.aboutHistory.map((paragraph, index) => (
              <p key={index} className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-6"
        >
          <h3 className="text-3xl font-bold mb-2 flex items-center font-display">
            <span className="p-3 glass-card mr-4">
              <Target className="text-accent" />
            </span>
            Mi Enfoque
          </h3>

          <div className="space-y-6 mt-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 group hover:shadow-secondary/10 transition-all duration-500"
                whileHover={{ x: 10 }}
              >
                <div className="mb-4">{card.icon}</div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">{card.title}</h4>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;