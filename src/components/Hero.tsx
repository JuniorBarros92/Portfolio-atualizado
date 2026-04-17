import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export function Hero() {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typewriterText = typewriterRef.current;
    if (!typewriterText) return;

    const text = "Desenvolvedor Front-End";
    typewriterText.textContent = '';
    let i = 0;
    let currentTimeout: ReturnType<typeof setTimeout>;
    
    function typeWriter() {
        if (!typewriterRef.current) return;
        if (i < text.length) {
            typewriterText!.textContent += text.charAt(i);
            i++;
            currentTimeout = setTimeout(typeWriter, 100);
        } else {
            currentTimeout = setTimeout(() => {
                i = 0;
                typewriterText!.textContent = '';
                typeWriter();
            }, 3000);
        }
    }
    
    currentTimeout = setTimeout(typeWriter, 1000);

    return () => clearTimeout(currentTimeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorativo Estático (Curva e Gradiente Suave) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <svg className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] opacity-20 dark:opacity-30 mix-blend-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C30,80 70,20 100,50 L100,100 L0,100 Z" fill="url(#gradient)" />
          <path d="M0,40 C40,90 80,10 100,40" stroke="var(--color-secondary)" strokeWidth="0.2" fill="none" className="opacity-50" />
          <path d="M0,60 C20,20 80,80 100,60" stroke="var(--color-primary)" strokeWidth="0.2" fill="none" className="opacity-50" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="var(--color-secondary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--bg-main)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center gap-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse"></span>
            <span className="text-sm font-medium text-[var(--text-main)]">Disponível para novos projetos</span>
          </motion.div>

          <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter text-[var(--text-main)] mb-2 leading-tight">
            <span className="text-gradient w-full inline-block pb-2 drop-shadow-sm">Junior Barros</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-[var(--text-muted)] font-medium mb-6 h-10 flex items-center justify-center">
            <span ref={typewriterRef} className="whitespace-pre"></span><span className="animate-pulse ml-1 text-[var(--color-primary)]">|</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-2xl leading-relaxed">
            Crio interfaces web modernas, responsivas e experiências de usuário envolventes com foco em design <span className="text-[var(--text-main)] font-medium">elegante</span> e performance <span className="text-[var(--text-main)] font-medium">otimizada</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <a
              href="#projects"
              className="group relative flex items-center justify-center gap-2 bg-[var(--text-main)] text-[var(--bg-main)] px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(236,72,153,0.5)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[var(--gradient-bg)] opacity-0 group-hover:opacity-10 transition-opacity"></div>
              Ver Projetos 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 glass px-8 py-4 rounded-full font-semibold transition-all hover:bg-[var(--inverse-glass)] hover:scale-105"
            >
              <Mail size={20} className="text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors" /> 
              <span className="text-[var(--text-main)]">Contato</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
