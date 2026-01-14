import React from 'react';
import { Heart, Coffee, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';

const Footer = () => {
  const { personalInfo, contact } = cvData;

  return (
    <footer className="relative bg-slate-900 text-white pt-32 pb-16 overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-primary-dark to-transparent opacity-50" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12">
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              ¿Tienes un proyecto <br />
              <span className="text-gradient">increíble?</span>
            </h3>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Siempre estoy buscando nuevos desafíos y colaboraciones interesantes.
              Hagamos que algo grande suceda juntos.
            </p>
            <div className="flex flex-wrap gap-6">
              <motion.a
                href={`mailto:${contact.email}`}
                className="btn-primary !scale-100 group"
                whileHover={{ scale: 1.05 }}
              >
                Hablemos ahora
                <ExternalLink className="w-5 h-5 ml-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col items-end text-right">
            <div className="text-8xl font-black text-white/5 tracking-tighter mb-8 select-none">
              {personalInfo.initials}
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-500">Conectar</h4>
              <div className="flex space-x-4">
                <motion.a
                  href={contact.github}
                  target="_blank"
                  className="p-4 bg-white/5 rounded-2xl hover:bg-secondary/20 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <span className="text-lg font-bold">GitHub</span>
                </motion.a>
                <motion.a
                  href={contact.linkedin}
                  target="_blank"
                  className="p-4 bg-white/5 rounded-2xl hover:bg-secondary/20 transition-all font-bold"
                  whileHover={{ y: -5 }}
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2 text-slate-400 font-medium">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" />
            <span>y mucho</span>
            <Coffee className="w-4 h-4 text-yellow-600 mx-1" />
            <span className="mx-2 opacity-30">|</span>
            <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          </div>

          <div className="flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-slate-500">
            <a href="#about" className="hover:text-white transition-colors">Sobre Mí</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;