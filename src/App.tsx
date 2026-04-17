import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 border-t border-[var(--border-color)] text-center mt-12 bg-[var(--bg-surface)]">
        <p className="text-[var(--text-muted)] text-sm">
          &copy; {new Date().getFullYear()} Junior Barros. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
