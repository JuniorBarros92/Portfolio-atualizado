import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
} from 'react-icons/si';

const techIcons = [
  { name: 'React.js', icon: SiReact, color: 'group-hover:text-[#61DAFB]' },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'group-hover:text-[#3178C6]',
  },
  {
    name: 'TailwindCSS',
    icon: SiTailwindcss,
    color: 'group-hover:text-[#06B6D4]',
  },
  { name: 'Node.js', icon: SiNodedotjs, color: 'group-hover:text-[#339933]' },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: 'group-hover:text-[var(--text-inverse)] dark:group-hover:text-white',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--gradient-bg)] mx-auto rounded-full opacity-50" />
        </motion.div>

        {/* Carousel Container */}
        <div className="mt-16 w-full max-w-6xl mx-auto mask-gradient py-10 carousel-wrapper">
          <div className="flex animate-infinite-scroll w-max hover:animation-play-state-paused">
            {[1, 2, 3, 4].map((iteration) => (
              <div
                key={iteration}
                className="flex gap-8 px-4"
                aria-hidden={iteration !== 1}
              >
                {techIcons.map((tech, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center w-44 h-44 glass rounded-3xl transition-all duration-300 hover:scale-105  hover:border-[var(--color-primary)]/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                    title={tech.name}
                  >
                    <tech.icon
                      className={`text-6xl mb-5 text-[var(--text-muted)] transition-colors duration-300 ${tech.color}`}
                    />
                    <span className="text-[var(--text-main)] font-medium text-lg tracking-wide group-hover:text-gradient transition-all">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
