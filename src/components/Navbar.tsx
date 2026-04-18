import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  
  { name: 'Sobre', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Força o início no modo claro, ignorando o cache salvo no navegador
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`absolute w-full z-50 transition-all duration-500 top-0 pt-4 px-4 md:px-0`}
    >
      <div 
        className={`mx-auto max-w-5xl transition-all duration-500 ${
          scrolled 
            ? 'glass rounded-full px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]' 
            : 'px-6 py-4 bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl md:text-2xl font-bold font-sans tracking-tight text-[var(--text-main)] group">
            &lt;Junior <span className="text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">/</span>&gt;
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <div className="h-6 w-[1px] bg-[var(--border-color)] mx-2"></div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--inverse-glass)] transition-all"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
               onClick={() => setIsDark(!isDark)}
               className="p-2 rounded-full text-[var(--text-main)] hover:bg-[var(--inverse-glass)] transition-colors"
            >
               {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-[var(--text-main)]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 glass rounded-3xl flex flex-col items-center py-8 gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-medium text-[var(--text-main)] hover:text-transparent hover:bg-clip-text hover:bg-[var(--gradient-bg)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
