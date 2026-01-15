import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cvData } from '../data/cvData';

const Contact = () => {
  const { contact } = cvData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-40 bg-white dark:bg-black transition-colors duration-700 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col space-y-8 mb-32">
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-mono tracking-[0.4em] text-black/20 dark:text-white/20 uppercase">06 / CONEXIÓN</span>
            <div className="h-px w-12 bg-black/10 dark:bg-white/10" />
          </div>
          <h2 className="text-6xl md:text-8xl font-display font-medium text-black dark:text-white tracking-tighter leading-none">
            Inicia una <br /> <span className="text-black/5 dark:text-white/5 text-outline">Conversación</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-24">

          {/* Info Sidebar */}
          <div className="lg:col-span-4 space-y-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Canal Directo</span>
                <p className="text-xl font-display italic text-black dark:text-white">{contact.email}</p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Redes</span>
                <div className="flex flex-col space-y-2">
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-display text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-lg font-display text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
            </div>

            <div className="pt-16 border-t border-black/5 dark:border-white/5 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Ubicación Actual</span>
              <p className="text-xl font-display font-light text-black/60 dark:text-white/60">{contact.location}</p>
              <p className="text-[10px] font-mono text-black/20 dark:text-white/20 uppercase tracking-[0.2em]">Disponibilidad Global Remota</p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  className="h-full flex flex-col justify-center space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-4xl lg:text-5xl font-display font-medium text-black dark:text-white tracking-tighter">
                    Mensaje Recibido.
                  </h3>
                  <p className="text-xl font-display font-light text-black/60 dark:text-white/60 leading-relaxed max-w-md">
                    He recibido tu consulta. Me pondré en contacto contigo en breve para discutir cómo podemos colaborar.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 font-display font-light text-xl text-black dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 font-display font-light text-xl text-black dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Asunto</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 font-display font-light text-xl text-black dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-mono tracking-widest text-black/30 dark:text-white/30 uppercase">Mensaje</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 font-display font-light text-xl text-black dark:text-white outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-12">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-minimal group"
                    >
                      <span>{isSubmitting ? 'ENVIANDO...' : 'TRANSMITIR MENSAJE'}</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
