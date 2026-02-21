import { useState } from "react"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.logo}>Junior Barros</div>

        <ul className={`${styles.navLinks} ${open ? styles.active : ""}`}>
          <li>
            <a href="#home" onClick={() => setOpen(false)}>
              Início
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contato
            </a>
          </li>
        </ul>

        <button
          className={`${styles.hamburger} ${open ? styles.active : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}