import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Página de destino do iPhone 17 Pro (clone da Apple)',
    description:
      'Uma landing page moderna, responsiva e de alta performance inspirada no design premium da Apple, focada especificamente em um conceito do iPhone 17 Pro . Desenvolvida com as ferramentas mais modernas do ecossistema front-end.',
    image: '/projeto-apple.png',
    tags: ['React', 'TypeScript', 'Tailwind v4', 'Recharts'],
    demo: 'https://clone-aple.netlify.app/',
    github: 'https://github.com/JuniorBarros92/apple-clone',
  },
  {
    id: 2,
    title: 'Rede Social Dogs',
    description:
      'Aplicação front-end criada com React + Vite que replica as funcionalidades do site Dogs: Feed de fotos com paginação, Área de autenticação (login/logout), Upload de fotos pelo usuário, Perfil do usuário com estatísticas (gráficos usando Victory).',
    image: '/dogs.png',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    demo: 'https://rede-social-dogss.netlify.app/',
    github: 'https://github.com/JuniorBarros92/primeiro-projeto-react',
  },
  {
    id: 3,
    title: 'Floresta - Site de Turismo e Hospedagem',
    description:
      'Um site moderno e responsivo para experiências de turismo ecológico em floresta. O projeto apresenta uma interface atraente e fácil de usar, com seções dedicadas a destinos, atividades, pacotes e contato. Utiliza animações suaves para melhorar a experiência do usuário e é otimizado para desempenho e SEO.',
    image: '/floresta.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://projeto-floresta.netlify.app/',
    github: 'https://github.com/JuniorBarros92/TailwindCSS',
  },
  {
    id: 4,
    title: 'Controle de Vendas',
    description:
      'Um aplicativo web para controle e análise de vendas, desenvolvido com React, TypeScript e Vite. Permite visualizar resumos de vendas, listar vendas por período e visualizar detalhes individuais de vendas, incluindo gráficos interativos.',
    image: '/controle-de-vendas.png',
    tags: ['React', 'TypeScript', 'Vite'],
    demo: 'https://controle-de-venda.netlify.app/',
    github: 'https://github.com/JuniorBarros92/controle-de-vendas',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10 border-t border-[var(--border-color)] pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--gradient-bg)] mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-3xl overflow-hidden group border border-[var(--border-color)] hover:border-[var(--color-primary)]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[var(--inverse-glass)]">
                <div className="absolute inset-0 bg-[var(--gradient-bg)] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--text-muted)] mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 bg-[var(--inverse-glass)] border border-[var(--border-color)] text-[var(--text-main)] rounded-full hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 bg-[var(--text-main)] text-[var(--bg-main)] hover:scale-105 py-3 rounded-full transition-transform font-semibold text-sm shadow-md"
                  >
                    <ExternalLink size={18} /> Ver Deploy
                  </a>
                  <a
                    href={project.github}
                    className="w-12 h-12 flex items-center justify-center bg-[var(--inverse-glass)] hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-main)] rounded-full transition-all hover:scale-105"
                    aria-label="Ver código no GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
