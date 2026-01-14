import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

    // Simulación de envío
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

  const contactInfo = [
    { icon: <Mail />, label: 'Email', value: contact.email, href: `mailto:${contact.email}`, color: 'bg-blue-500' },
    { icon: <Linkedin />, label: 'LinkedIn', value: 'Conectar', href: contact.linkedin, color: 'bg-indigo-600' },
    { icon: <Github />, label: 'GitHub', value: 'Ver Perfil', href: contact.github, color: 'bg-slate-800' }
  ];

  return (
    <section id="contact" className="section-container relative">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">Contacto</h2>
          <div className="w-32 h-2 bg-premium-gradient mx-auto rounded-full"></div>
          <p className="text-xl text-slate-500 dark:text-slate-400 mt-8 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades.
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-5 gap-16">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-2 space-y-8">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 flex items-center group hover:bg-white transition-all duration-500 block"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 15 }}
            >
              <div className={`p-4 rounded-2xl text-white shadow-xl mr-6 transition-transform group-hover:rotate-12 ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-secondary mb-1">
                  {item.label}
                </h4>
                <p className="text-xl font-bold dark:text-white">{item.value}</p>
              </div>
            </motion.a>
          ))}

          <div className="glass-card p-10 bg-premium-gradient text-white overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="text-2xl font-black mb-4">¿Prefieres un café?</h4>
              <p className="font-medium opacity-90 leading-relaxed mb-6">
                Actualmente resido en <strong>Madrid</strong>, pero estoy abierto a trabajo remoto en cualquier parte del mundo.
              </p>
              <div className="flex items-center text-sm font-black tracking-widest uppercase">
                <MapPin className="w-5 h-5 mr-3" />
                Madrid, España
              </div>
            </div>
            <MapPin className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 pointer-events-none" />
          </div>
        </div>

        {/* Form area */}
        <div className="lg:col-span-3">
          <motion.div
            className="glass-card p-10 md:p-16 h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-4xl font-black mb-4">¡Mensaje Enviado!</h3>
                  <p className="text-xl text-slate-600 dark:text-slate-400">
                    Gracias por el contacto. Te responderé en menos de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-slate-800 transition-all outline-none font-bold placeholder:text-slate-400"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-slate-800 transition-all outline-none font-bold placeholder:text-slate-400"
                        placeholder="ejemplo@correo.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Asunto</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-slate-800 transition-all outline-none font-bold placeholder:text-slate-400"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-500 ml-1">Mensaje</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-secondary focus:bg-white dark:focus:bg-slate-800 transition-all outline-none font-bold placeholder:text-slate-400 resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full !py-6 text-xl group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-6 h-6 mr-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        Enviar Mensaje
                      </span>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;