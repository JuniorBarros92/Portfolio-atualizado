import { motion } from 'framer-motion';
import { Send, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  const socialLinks = [
    {
      icon: <FaGithub size={22} />,
      href: 'https://github.com/JuniorBarros92',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin size={22} />,
      href: 'https://www.linkedin.com/feed/',
      label: 'LinkedIn',
    },
    { icon: <FaInstagram size={22} />, href: '#', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 border-t border-[var(--border-color)] pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--gradient-bg)] mx-auto rounded-full opacity-50 mb-6" />
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg">
            Sinta-se à vontade para entrar em contato. Estou aberto a novas
            oportunidades e sempre disposto a um bom bate-papo!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 glass p-8 md:p-10 rounded-[2rem] border border-[var(--border-color)] hover:border-[var(--color-primary)]/30 transition-colors duration-500"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-[var(--text-main)] ml-2"
                >
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Como posso te chamar?"
                  className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 rounded-2xl p-4 text-[var(--text-main)] outline-none transition-all shadow-inner"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[var(--text-main)] ml-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-secondary)]/20 rounded-2xl p-4 text-[var(--text-main)] outline-none transition-all resize-none shadow-inner"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 mt-4 bg-[var(--text-main)] text-[var(--bg-main)] hover:scale-[1.02] rounded-2xl font-bold flex justify-center items-center gap-2 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]"
              >
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Socials & Alternative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 flex flex-col justify-center gap-10"
          >
            <div className="glass p-8 rounded-[2rem] border border-[var(--border-color)] flex flex-col items-center text-center hover:border-green-500/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">
                WhatsApp
              </h3>
              <p className="text-[var(--text-muted)] mb-8 text-sm">
                Precisa de uma resposta mais rápida? Me chame diretamente.
              </p>
              <a
                href="#"
                className="w-full py-4 bg-green-500 hover:bg-green-400 text-white rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:-translate-y-1"
              >
                Iniciar Conversa
              </a>
            </div>

            <div>
              <p className="text-[var(--text-muted)] font-semibold mb-4 uppercase text-xs tracking-widest ml-2">
                Me encontre também nas redes:
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    title={link.label}
                    className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-[var(--text-main)] hover:text-transparent hover:bg-clip-text hover:bg-[var(--gradient-bg)] hover:scale-110 hover:border-transparent transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
