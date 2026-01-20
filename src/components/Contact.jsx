import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Github, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { cvData } from '../data/cvData';
import bgGlobal from '../assets/bg_global.png';

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

    // CONFIGURACIÓN DE EMAILJS
    // Debes reemplazar estos valores con tus propios IDs de EmailJS
    const SERVICE_ID = 'service_i447599'; // Reemplazar con tu Service ID
    const TEMPLATE_ID = 'template_auohak9'; // Reemplazar con tu Template ID
    const PUBLIC_KEY = 'wKZfaY_A2B53Uoko3'; // Reemplazar con tu Public Key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Humberto Chacón',
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, asegúrate de haber configurado tus IDs de EmailJS correctamente o contáctame directamente por mis correos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-60 bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] transition-colors duration-700 overflow-hidden border-t border-primary/10">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] dark:opacity-[0.12] grayscale invert dark:invert-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgGlobal})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-[var(--color-bg-dark)] dark:via-transparent dark:to-[var(--color-bg-dark)]" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header - Massive Impact */}
        <div className="flex flex-col space-y-8 md:space-y-12 mb-20 md:mb-48">
          <div className="flex items-center space-x-6 md:space-x-8">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary uppercase font-black">06 / CONEXIÓN</span>
            <div className="h-px w-16 md:w-24 bg-primary/20" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-display font-medium text-black dark:text-white tracking-tighter leading-[0.9] break-words">
            Construyamos <br />
            <span className="text-primary/55 dark:text-primary/40 text-outline italic">el Futuro</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 lg:gap-24 xl:gap-32">

          {/* Info Sidebar - More Robust */}
          <div className="lg:col-span-4 space-y-12 md:space-y-24">
            <div className="space-y-12 md:space-y-16">
              <div className="group space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono tracking-widest text-primary uppercase font-black">Canal Directo</span>
                </div>
                <div className="flex flex-col space-y-2">
                  {contact.emails.map((email, i) => (
                    <p key={i} className="text-xl md:text-2xl font-display italic text-black dark:text-white hover:text-primary transition-colors cursor-pointer break-all">
                      {email}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-8 md:space-y-10">
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-[10px] md:text-xs font-mono tracking-widest text-primary font-black uppercase">Redes Profesionales</span>
                  <div className="h-px grow bg-primary/10" />
                </div>
                <div className="flex flex-col space-y-4 md:space-y-6">
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-display text-black/70 dark:text-white/60 hover:text-primary transition-all flex items-center gap-4 md:gap-6 group">
                    <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-primary/20 group-hover:text-primary group-hover:scale-110 transition-all shrink-0" />
                    LinkedIn <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-display text-black/70 dark:text-white/60 hover:text-primary transition-all flex items-center gap-4 md:gap-6 group">
                    <Github className="w-6 h-6 md:w-8 md:h-8 text-primary/20 group-hover:text-primary group-hover:scale-110 transition-all shrink-0" />
                    GitHub <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                  {contact.phone && (
                    <a href={`https://wa.me/${contact.phone.replace(/[\s+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-display text-black/70 dark:text-white/60 hover:text-primary transition-all flex items-center gap-4 md:gap-6 group">
                      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-primary/20 group-hover:text-primary group-hover:scale-110 transition-all shrink-0" />
                      WhatsApp <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-12 md:pt-24 border-t-2 border-primary/5 space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-primary uppercase font-black">Ubicación Actual</span>
              </div>
              <div>
                <p className="text-xl md:text-3xl font-display font-light text-black/70 dark:text-white/60">{contact.location}</p>
                <div className="mt-4 md:mt-6 inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-full bg-primary/5 border border-primary/10">
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-[8px] md:text-[10px] font-mono text-primary uppercase tracking-[0.1em] md:tracking-[0.2em] font-black">Disponibilidad Global</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area - Enhanced */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  className="h-full flex flex-col justify-center space-y-8 md:space-y-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Send className="w-6 h-6 md:w-10 md:h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-6xl font-display font-medium text-primary tracking-tighter leading-tight">
                    Mensaje Recibido.
                  </h3>
                  <p className="text-xl md:text-2xl font-display font-light text-black/70 dark:text-white/60 leading-relaxed max-w-xl">
                    He recibido tu consulta con éxito. Me pondré en contacto contigo en breve para discutir cómo podemos colaborar.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 md:space-y-16">
                  <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
                    <div className="space-y-4 md:space-y-6">
                      <label className="text-[10px] md:text-xs font-mono tracking-widest text-primary/40 uppercase font-black">Tu Nombre</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b-2 border-primary/10 py-4 md:py-6 font-display font-light text-2xl md:text-2xl text-black dark:text-white outline-none focus:border-primary transition-all focus:bg-primary/[0.01] placeholder:text-black/10 dark:placeholder:text-white/5"
                      />
                    </div>
                    <div className="space-y-4 md:space-y-6">
                      <label className="text-[10px] md:text-xs font-mono tracking-widest text-primary/40 uppercase font-black">Tu Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b-2 border-primary/10 py-4 md:py-6 font-display font-light text-lg md:text-2xl text-black dark:text-white outline-none focus:border-primary transition-all focus:bg-primary/[0.01] placeholder:text-black/10 dark:placeholder:text-white/5"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <label className="text-[10px] md:text-xs font-mono tracking-widest text-primary/40 uppercase font-black">Asunto del Mensaje</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Propuesta de Colaboración"
                      className="w-full bg-transparent border-b-2 border-primary/10 py-4 md:py-6 font-display font-light text-lg md:text-2xl text-black dark:text-white outline-none focus:border-primary transition-all focus:bg-primary/[0.01] placeholder:text-black/10 dark:placeholder:text-white/5"
                    />
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <label className="text-[10px] md:text-xs font-mono tracking-widest text-primary/40 uppercase font-black">Detalle del Mensaje</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                      rows="4"
                      className="w-full bg-transparent border-b-2 border-primary/10 py-4 md:py-6 font-display font-light text-lg md:text-2xl text-black dark:text-white outline-none focus:border-primary transition-all resize-none focus:bg-primary/[0.01] placeholder:text-black/10 dark:placeholder:text-white/5"

                    ></textarea>
                  </div>

                  <div className="pt-8 md:pt-16">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-6 md:gap-8 text-xs md:text-sm font-black tracking-[0.3em] md:tracking-[0.5em] uppercase bg-primary text-white px-8 md:px-16 py-5 md:py-8 rounded-sm shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? 'ENVIANDO...' : 'TRANSMITIR MENSAJE'}</span>
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
