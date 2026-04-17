import { motion } from 'framer-motion';
import { Code2, Briefcase } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--gradient-bg)] mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-5/12 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              {/* Glow de fundo da imagem */}
              <div className="absolute inset-0 bg-[var(--gradient-bg)] rounded-[2rem] rotate-6 opacity-30 blur-2xl group-hover:opacity-50 group-hover:rotate-12 transition-all duration-700" />
              <div className="absolute inset-0 bg-[var(--gradient-bg)] rounded-[2rem] opacity-20" />

              <div className="absolute inset-1 bg-[var(--bg-main)] rounded-[1.8rem] overflow-hidden border border-[var(--border-color)]">
                <img
                  src="/foto-perfil.jpeg"
                  alt="Junior Barros - Desenvolvedor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 flex flex-col gap-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[var(--text-main)] tracking-tight">
                Transformando ideias em{' '}
                <span className="text-gradient">experiências digitais.</span>
              </h3>

              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                Sou estudante de Análise e Desenvolvimento de Sistemas (ADS), em
                constante aprendizado no desenvolvimento Front-End. Tenho focado
                no ecossistema React e nas melhores práticas para criar
                interfaces web rápidas, acessíveis e bem estruturadas.
              </p>

              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                Atualmente, estou iniciando meus estudos em Back-End com o
                objetivo de me tornar um desenvolvedor Full Stack, ampliando
                minhas habilidades para construir aplicações completas e
                eficientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="glass p-6 rounded-3xl flex items-start gap-5 hover:-translate-y-1 transition-transform duration-300 border border-[var(--border-color)] hover:border-[var(--color-primary)]/30 group">
                <div className="p-4 bg-[var(--inverse-glass)] rounded-2xl text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                  <Code2 size={28} />
                </div>
                <div>
                  <h4 className="text-[var(--text-main)] font-semibold text-lg">
                    Stack Moderna
                  </h4>
                  <span className="text-[var(--text-muted)] mt-1 block">
                    React & TS
                  </span>
                </div>
              </div>

              <div className="glass p-6 rounded-3xl flex items-start gap-5 hover:-translate-y-1 transition-transform duration-300 border border-[var(--border-color)] hover:border-[var(--color-secondary)]/30 group">
                <div className="p-4 bg-[var(--inverse-glass)] rounded-2xl text-[var(--color-secondary)] group-hover:scale-110 transition-transform">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h4 className="text-[var(--text-main)] font-semibold text-lg">
                    Foco em UI/UX
                  </h4>
                  <span className="text-[var(--text-muted)] mt-1 block">
                    Design Premium
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
